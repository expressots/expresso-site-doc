# Studio screenshots

These images are referenced by the v4 Studio docs at:

- `versioned_docs/version-4.0.0/studio/overview.mdx`
- `versioned_docs/version-4.0.0/studio/security.mdx`

## Expected files

| Filename                              | Used by                                       | What it shows                                                  |
| ------------------------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| `status-dashboard.png`                | `overview.mdx`                                | Landing view: health, top routes, aggregate security grade.    |
| `architecture-map.png`                | `overview.mdx`                                | DI graph rendered from `AppContainer.introspect()`.            |
| `request-timeline.png`                | `overview.mdx`                                | Live recording of HTTP requests with replay UI.                |
| `security-overview.png`               | `overview.mdx` + `security.mdx`               | Supply-chain advisories + runtime posture summary.             |
| `security-finding-detail.png`         | `security.mdx`                                | Expanded advisory with GHSA / CVE / OSV links + root cause.    |
| `security-recommended-fixes.png`      | `security.mdx`                                | Grouped FixGroups with one-click **Apply fix**.                |
| `security-runtime-posture.png`        | `security.mdx`                                | OWASP API Top 10 findings drawn from recorded traffic.         |

## How to capture them

See [`overview.mdx#capture-guide`](../../../versioned_docs/version-4.0.0/studio/overview.mdx) for the canonical capture procedure. TL;DR:

1. Run `npm run dev` inside [`tests/test-op`](https://github.com/expressots/expressots/tree/feature/v4.0/tests/test-op) so the agent has real traffic + DI graph.
2. Run `npx expressots studio` in a second terminal and open `http://localhost:3333`.
3. Switch the UI to **dark theme** via the Settings drawer.
4. Capture each view at **1440 × 900** and save as PNG in this folder using the filenames above.
5. Open a docs PR against `feature/v4.0`.

Until real screenshots are dropped here, the docs render with broken `<img>` tags (alt text only). That's intentional — it makes missing assets very visible without breaking the build.
