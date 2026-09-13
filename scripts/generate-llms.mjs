/**
 * Generate static/llms.txt and static/llms-full.txt from the published
 * documentation version, so the site serves both at its root:
 *
 *   https://doc.expresso-ts.com/llms.txt       curated index for LLM agents
 *   https://doc.expresso-ts.com/llms-full.txt  every page, plain markdown
 *
 * Runs before `docusaurus build` and `docusaurus start` (see package.json).
 * The outputs are generated files and are not committed; the docs are the
 * single source of truth. Format follows https://llmstxt.org.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://doc.expresso-ts.com";
const VERSION = JSON.parse(fs.readFileSync(path.join(ROOT, "versions.json"), "utf8"))[0];
const DOCS_DIR = path.join(ROOT, "versioned_docs", `version-${VERSION}`);
const OUT_DIR = path.join(ROOT, "static");

// Hand-written head: what an agent must know before reading any page.
const HEAD = `# ExpressoTS

> TypeScript-first Node.js framework built on Express 5: dependency injection,
> lifecycle hooks, providers, guards, interceptors, events, and a testing
> toolkit. Ships as @expressots/core, @expressots/adapter-express and the
> @expressots/cli scaffolder. Requires Node >= 20.19 (Bun is supported).

This file indexes the documentation for the current major (${VERSION.split(".")[0]}.x).
The full text of every page is at ${SITE}/llms-full.txt.

## Write code for v4, not v3

The entry point is \`bootstrap\`:

\`\`\`ts
import { bootstrap } from "@expressots/core";
import { App } from "./app"; // class App extends AppExpress

void bootstrap(App);
\`\`\`

Names removed in v4 that models trained on v3 still produce:

- \`AppFactory\` / \`AppFactory.create()\` -> use \`await bootstrap(App)\`. Since 4.3.0
  importing it compiles to an error that names the replacement.
- \`InMemoryDataProvider\` / \`InMemoryDataTable\` -> \`InMemoryDBProvider\`
- \`LazyServiceIdentifer\` (typo alias) -> \`LazyServiceIdentifier\`
- \`AppContainer#viewContainerBindings\` -> \`introspect()\` or \`getFormattedBindingsView()\`
- \`.env\` is no longer loaded implicitly -> call \`loadEnvSync()\` before \`bootstrap\`,
  or pass \`envFileConfig\` to \`bootstrap\`.

Every scaffolded project carries an AGENTS.md with these rules, and
\`expressots llms\` prints the guidance matching the installed package version.
`;

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: source };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
  }
  return { data, body: source.slice(match[0].length) };
}

/** Strip MDX-only syntax so the text reads as plain markdown. */
function toMarkdown(body) {
  return body
    .replace(/^import .*$\n?/gm, "")
    .replace(/^export .*$\n?/gm, "")
    .replace(/^<\/?Tabs[^>]*>\s*$\n?/gm, "")
    .replace(/^<TabItem[^>]*label="([^"]*)"[^>]*>\s*$/gm, "**$1**")
    .replace(/^<\/TabItem>\s*$\n?/gm, "")
    .replace(/^:::(\w+)(?:\s+(.*))?$/gm, (_m, kind, title) => `> **${title || kind}**`)
    .replace(/^:::\s*$\n?/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function categoryMeta(dir) {
  const file = path.join(dir, "_category_.json");
  if (fs.existsSync(file)) {
    const meta = JSON.parse(read(file));
    return { label: meta.label ?? path.basename(dir), position: meta.position ?? 999 };
  }
  return { label: path.basename(dir), position: 999 };
}

function collect(dir, rel = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const docs = [];
  const subdirs = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "img") subdirs.push(full);
      continue;
    }
    if (!/\.mdx?$/.test(entry.name)) continue;
    const { data, body } = frontmatter(read(full));
    const id = path.posix.join(rel, entry.name.replace(/\.mdx?$/, ""));
    const title = data.title ?? (body.match(/^#\s+(.+)$/m)?.[1] ?? id);
    docs.push({
      id,
      title,
      description: data.description ?? "",
      position: Number(data.sidebar_position ?? 999),
      url: `${SITE}/docs/${id}`,
      markdown: toMarkdown(body),
    });
  }
  docs.sort((a, b) => a.position - b.position || a.title.localeCompare(b.title));
  const categories = subdirs
    .map((sub) => ({ ...categoryMeta(sub), ...collect(sub, path.posix.join(rel, path.basename(sub))) }))
    .sort((a, b) => a.position - b.position || a.label.localeCompare(b.label));
  return { docs, categories };
}

function renderIndex(node, depth = 2) {
  let out = "";
  for (const doc of node.docs) {
    out += `- [${doc.title}](${doc.url})${doc.description ? `: ${doc.description}` : ""}\n`;
  }
  for (const category of node.categories) {
    out += `\n${"#".repeat(Math.min(depth, 4))} ${category.label}\n\n`;
    out += renderIndex(category, depth + 1);
  }
  return out;
}

function flatten(node) {
  return [...node.docs, ...node.categories.flatMap(flatten)];
}

const tree = collect(DOCS_DIR);
const all = flatten(tree);

const index = `${HEAD}\n## Documentation (${VERSION.split(".")[0]}.x)\n\n${renderIndex(tree)}
## Optional

- [Everything in one file](${SITE}/llms-full.txt): all ${all.length} pages as plain markdown
- [GitHub repository](https://github.com/expressots/expressots)
- [Release notes](https://github.com/expressots/expressots/releases)
`;

const full =
  `# ExpressoTS documentation (${VERSION.split(".")[0]}.x), all pages\n\n` +
  `Generated from ${SITE}. Index and migration notes: ${SITE}/llms.txt\n\n` +
  all.map((doc) => `\n---\n\n# ${doc.title}\n\nSource: ${doc.url}\n\n${doc.markdown}\n`).join("");

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, "llms.txt"), index);
fs.writeFileSync(path.join(OUT_DIR, "llms-full.txt"), full);
console.log(`[llms] wrote static/llms.txt (${all.length} pages indexed) and static/llms-full.txt (${(full.length / 1024).toFixed(0)} KiB)`);
