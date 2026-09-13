#!/usr/bin/env bash
# Generates branded placeholder PNGs for each Studio screenshot until real
# captures land. Re-run after editing labels below.
#
#   bash _make_placeholders.sh
#
# Requires: ImageMagick (`magick` / `convert`).

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
TMP_SVG="${HERE}/.tmp-placeholder.svg"

declare -A FILES=(
    ["status-dashboard.png"]="STATUS DASHBOARD|Health · routes · security grade"
    ["architecture-map.png"]="ARCHITECTURE MAP|DI graph from AppContainer.introspect()"
    ["request-timeline.png"]="REQUEST TIMELINE|Live HTTP recording + replay"
    ["security-overview.png"]="SECURITY OVERVIEW|Supply-chain · runtime posture"
    ["security-finding-detail.png"]="SECURITY · FINDING DETAIL|GHSA · CVE · OSV · root cause"
    ["security-recommended-fixes.png"]="SECURITY · RECOMMENDED FIXES|FixGroups · one-click apply"
    ["security-runtime-posture.png"]="SECURITY · RUNTIME POSTURE|OWASP API Top 10 from traffic"
)

for fname in "${!FILES[@]}"; do
    IFS='|' read -r title subtitle <<<"${FILES[$fname]}"

    cat > "${TMP_SVG}" <<SVG
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" width="1440" height="900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#17181b"/>
      <stop offset="100%" stop-color="#0f0f11"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#232529" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1440" height="900" fill="url(#bg)"/>
  <rect width="1440" height="900" fill="url(#grid)" opacity="0.5"/>
  <rect x="80" y="80" width="1280" height="740" rx="14" fill="#17181b" stroke="#2f3137" stroke-width="1"/>

  <!-- Studio window chrome -->
  <rect x="80" y="80" width="1280" height="56" rx="14" fill="#1f2024"/>
  <rect x="80" y="124" width="1280" height="12" fill="#1f2024"/>
  <circle cx="116" cy="108" r="6" fill="#f5a098"/>
  <circle cx="138" cy="108" r="6" fill="#f0c570"/>
  <circle cx="160" cy="108" r="6" fill="#80f5a8"/>
  <text x="200" y="113" font-family="JetBrains Mono, ui-monospace, monospace" font-size="13" fill="#6e727a">localhost:4200/studio</text>

  <!-- Status pill -->
  <rect x="120" y="180" width="190" height="32" rx="16" fill="rgba(128,245,168,0.08)" stroke="rgba(128,245,168,0.55)" stroke-width="1"/>
  <circle cx="138" cy="196" r="4" fill="#80f5a8"/>
  <text x="152" y="200" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="600" fill="#80f5a8">MISSING SCREENSHOT</text>

  <!-- Title -->
  <text x="120" y="290" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="700" fill="#f4f5f7" letter-spacing="-1.5">${title}</text>

  <!-- Subtitle -->
  <text x="120" y="340" font-family="Inter, system-ui, sans-serif" font-size="24" font-weight="500" fill="#a8abb3">${subtitle}</text>

  <!-- Body lines -->
  <text x="120" y="430" font-family="JetBrains Mono, ui-monospace, monospace" font-size="16" fill="#6e727a">Real capture missing. See static/img/studio/README.md for how to drop it.</text>
  <text x="120" y="460" font-family="JetBrains Mono, ui-monospace, monospace" font-size="16" fill="#6e727a">Target asset:  ${fname}  ·  1440×900  ·  dark theme</text>

  <!-- Decorative dashboard skeleton -->
  <rect x="120" y="520" width="320" height="160" rx="10" fill="#1f2024" stroke="#232529"/>
  <rect x="140" y="540" width="80" height="10" rx="4" fill="#2f3137"/>
  <rect x="140" y="560" width="220" height="34" rx="6" fill="#25262b"/>
  <rect x="140" y="608" width="280" height="8" rx="4" fill="#80f5a8" opacity="0.85"/>
  <rect x="140" y="624" width="180" height="8" rx="4" fill="#2f3137"/>
  <rect x="140" y="640" width="240" height="8" rx="4" fill="#2f3137"/>

  <rect x="460" y="520" width="320" height="160" rx="10" fill="#1f2024" stroke="#232529"/>
  <rect x="480" y="540" width="80" height="10" rx="4" fill="#2f3137"/>
  <rect x="480" y="560" width="60" height="34" rx="6" fill="#25262b"/>
  <rect x="480" y="608" width="180" height="8" rx="4" fill="#2f3137"/>
  <rect x="480" y="624" width="220" height="8" rx="4" fill="#2f3137"/>
  <rect x="480" y="640" width="140" height="8" rx="4" fill="#2f3137"/>

  <rect x="800" y="520" width="540" height="160" rx="10" fill="#1f2024" stroke="#232529"/>
  <rect x="820" y="540" width="120" height="10" rx="4" fill="#2f3137"/>
  <polyline points="820,650 880,610 940,625 1000,580 1060,595 1120,545 1180,560 1240,520 1300,540"
            fill="none" stroke="#80f5a8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="820" y1="670" x2="1320" y2="670" stroke="#232529" stroke-width="1"/>

  <text x="120" y="780" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="600" letter-spacing="2" fill="#45474d">EXPRESSO·TS  /  STUDIO  /  v4.0  /  PLACEHOLDER</text>
</svg>
SVG

    magick -background none -density 96 "${TMP_SVG}" "${HERE}/${fname}"
    echo "  -> ${fname}"
done

rm -f "${TMP_SVG}"

echo "Done. Generated $(echo "${!FILES[@]}" | wc -w) placeholders in ${HERE}"
