#!/usr/bin/env node
/**
 * Capture ExpressoTS Studio screenshots for documentation.
 *
 * Prerequisites:
 *   - App running:  npm run dev          (port 3000)
 *   - Studio running: npx expressots-studio start --no-browser --port 3456
 *   - Coverage artifact: npm run test:cov in app-demo (optional but recommended)
 *
 * Usage:
 *   node scripts/capture-studio-screenshots.mjs
 *   OUT_DIR=/path/to/static/img/studio node scripts/capture-studio-screenshots.mjs
 */

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const STUDIO_URL = process.env.STUDIO_URL ?? "http://localhost:3456";
const API_URL = process.env.API_URL ?? "http://localhost:3000/api";
const OUT_DIR =
    process.env.OUT_DIR ??
    resolve(__dirname, "../static/img/studio");

/** Sidebar label -> output filename */
const VIEWS = [
    { label: "Status", file: "status.png" },
    { label: "Requests", file: "requests.png" },
    { label: "Logs", file: "logs.png" },
    { label: "API Client", file: "api-client.png" },
    { label: "Container", file: "container.png" },
    { label: "Architecture", file: "architecture.png" },
    { label: "Database", file: "database.png" },
    { label: "Metrics", file: "metrics.png" },
    { label: "Replay", file: "replay.png" },
    { label: "Security", file: "security.png" },
    { label: "Coverage", file: "coverage.png" },
];

async function seedTraffic() {
    const paths = ["/", "/health", "/users"];

    for (let i = 0; i < 12; i++) {
        for (const path of paths) {
            await fetch(`${API_URL}${path}`).catch(() => {});
        }
        await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: `Demo User ${i}`,
                email: `demo${i}@studio.dev`,
                role: i % 2 === 0 ? "editor" : "viewer",
            }),
        }).catch(() => {});
    }

    console.log("Seeded API traffic for Studio recordings.");
}

async function waitForAgent(page) {
    await page.goto(STUDIO_URL, { waitUntil: "networkidle" });
    await page.getByText("Agent connected", { exact: false }).waitFor({ timeout: 60_000 });
    await page.waitForTimeout(4000);
}

async function goToView(page, label) {
    const nav = page.locator("nav button").filter({ hasText: label });
    await nav.first().click();
    await page.waitForTimeout(1200);
}

async function captureView(page, label, file) {
    await goToView(page, label);
    await page.screenshot({ path: resolve(OUT_DIR, file), fullPage: false });
    console.log(`  captured ${file} (${label})`);
}

async function captureRequestsDetail(page) {
    await goToView(page, "Requests");
    const row = page.locator("table tbody tr, [data-exchange-id], .studio-request-row").first();
    if (await row.count()) {
        await row.first().click();
        await page.waitForTimeout(800);
    }
    await page.screenshot({
        path: resolve(OUT_DIR, "requests-trace.png"),
        fullPage: false,
    });
    console.log("  captured requests-trace.png (Requests trace detail)");
}

async function captureDatabaseWithData(page) {
    await goToView(page, "Database");
    await page.getByText("users", { exact: false }).first().waitFor({ timeout: 15_000 }).catch(() => {});
    await page.waitForTimeout(1500);
    await page.screenshot({
        path: resolve(OUT_DIR, "database-tables.png"),
        fullPage: false,
    });
    console.log("  captured database-tables.png (Database with table data)");
}

async function captureArchitectureLenses(page) {
    await goToView(page, "Architecture");
    await page.waitForTimeout(800);

    // Overview is the default lens; capture it as the main architecture screenshot.
    await page.screenshot({
        path: resolve(OUT_DIR, "architecture.png"),
        fullPage: false,
    });
    console.log("  captured architecture.png (Architecture Overview lens)");

    // Request Flow lens
    const requestFlowTab = page.getByRole("button", { name: /Request Flow/i });
    if (await requestFlowTab.count()) {
        await requestFlowTab.first().click();
        await page.waitForTimeout(1200);
        await page.screenshot({
            path: resolve(OUT_DIR, "architecture-request-flow.png"),
            fullPage: false,
        });
        console.log("  captured architecture-request-flow.png (Request Flow lens)");
    }

    // Explore lens
    const exploreTab = page.getByRole("button", { name: /Explore/i });
    if (await exploreTab.count()) {
        await exploreTab.first().click();
        await page.waitForTimeout(1200);
        await page.screenshot({
            path: resolve(OUT_DIR, "architecture-explore.png"),
            fullPage: false,
        });
        console.log("  captured architecture-explore.png (Explore lens)");
    }
}

async function captureSecurityPosture(page) {
    await goToView(page, "Security");
    await page.getByRole("button", { name: /Runtime Posture/i }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({
        path: resolve(OUT_DIR, "security-posture.png"),
        fullPage: false,
    });
    console.log("  captured security-posture.png (Runtime Posture tab)");

    const gradeToggle = page.getByText("How this grade is calculated", { exact: false });
    if (await gradeToggle.count()) {
        await gradeToggle.first().click();
        await page.waitForTimeout(600);
    }
    await page.screenshot({
        path: resolve(OUT_DIR, "security-grade.png"),
        fullPage: false,
    });
    console.log("  captured security-grade.png (Grade calculation + rescan controls)");
}

async function captureCoverageSource(page) {
    await goToView(page, "Coverage");
    await page.waitForTimeout(1000);

    const fileRow = page.locator("div.cursor-pointer").filter({ hasText: "app.controller.ts" }).first();
    if (await fileRow.count()) {
        await fileRow.click();
        await page.waitForTimeout(2000);
    }

    await page.screenshot({
        path: resolve(OUT_DIR, "coverage-source.png"),
        fullPage: false,
    });
    console.log("  captured coverage-source.png (Annotated source viewer)");
}

async function captureCoverageRunTests(page) {
    await goToView(page, "Coverage");
    const runBtn = page.getByRole("button", { name: /Run tests/i }).first();
    await runBtn.click();
    await page.waitForTimeout(2500);

    await page.screenshot({
        path: resolve(OUT_DIR, "coverage-run-tests.png"),
        fullPage: false,
    });
    console.log("  captured coverage-run-tests.png (Run tests transcript)");

    await page.waitForTimeout(12_000);
    await goToView(page, "Coverage");
    await page.waitForTimeout(1500);
    await page.screenshot({
        path: resolve(OUT_DIR, "coverage.png"),
        fullPage: false,
    });
    console.log("  captured coverage.png (Coverage summary after test run)");
}

async function main() {
    await mkdir(OUT_DIR, { recursive: true });
    await seedTraffic();

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
    });

    console.log(`Studio UI: ${STUDIO_URL}`);
    console.log(`Output:    ${OUT_DIR}\n`);

    await waitForAgent(page);

    for (const { label, file } of VIEWS) {
        if (["Coverage", "Database", "Security", "Architecture", "Metrics"].includes(label)) {
            continue;
        }
        await captureView(page, label, file);
    }

    await captureDatabaseWithData(page);
    await captureView(page, "Database", "database.png");

    // Architecture: capture all three lenses
    await captureArchitectureLenses(page);

    // Metrics: capture the full dashboard (scrolled to show all sections)
    await captureView(page, "Metrics", "metrics.png");

    // Security: Dependencies tab + Runtime Posture + Grade breakdown
    await captureView(page, "Security", "security.png");
    await captureSecurityPosture(page);

    // Coverage: summary, annotated source, run tests
    await captureView(page, "Coverage", "coverage.png");
    await captureCoverageSource(page);
    await captureCoverageRunTests(page);

    await captureRequestsDetail(page);

    await browser.close();
    console.log("\nDone.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
