# Studio screenshots

Real captures from the [Guide app-demo](https://github.com/expressots/expresso-site-doc) running against ExpressoTS Studio v4.

| File | Studio view |
| ---- | ----------- |
| `status.png` | Status dashboard |
| `requests.png` | Request timeline |
| `requests-trace.png` | Request timeline with traffic |
| `logs.png` | Logs stream |
| `api-client.png` | API Client |
| `container.png` | Container / DI inspector |
| `architecture.png` | Architecture map |
| `database.png` | Database empty state |
| `database-tables.png` | Database with live table data |
| `metrics.png` | Metrics dashboard |
| `replay.png` | Replay view |
| `security.png` | Security Dependencies tab + grade |
| `security-posture.png` | Runtime Posture (OWASP) tab |
| `security-grade.png` | Grade calculation + rescan controls |
| `coverage.png` | Coverage summary after test run |
| `coverage-source.png` | Annotated source viewer |
| `coverage-run-tests.png` | Run tests in progress |

## Regenerating

From `app-demo`:

```bash
npm run dev
npx expressots-studio start --no-browser --port 3456
npm run test:cov   # refresh coverage artifact before capture
```

From `expresso-site-doc`:

```bash
npm install playwright --no-save
npx playwright install chromium
npm run capture-studio-screenshots
```

Use port **3456** for Studio if Docusaurus dev server occupies 3333. The capture script waits for **Agent connected** before shooting.

Target size: **1440×900**, dark theme (Studio default).
