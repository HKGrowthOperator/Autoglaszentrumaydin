#!/bin/sh
# Nur fuer Cloud-Container, in denen als root gearbeitet wird: Chrome startet dort nur mit --no-sandbox.
# Nutzung: CHROME_PATH=werkzeuge/chrome-ohne-sandbox.sh node .claude/skills/design-taste-frontend/scripts/inspect.mjs index.html
for c in "$CHROME_BIN" /opt/pw-browsers/chromium-*/chrome-linux64/chrome /usr/bin/chromium /usr/bin/google-chrome; do
  if [ -n "$c" ] && [ -x "$c" ]; then exec "$c" --no-sandbox "$@"; fi
done
echo "Kein Chrome/Chromium gefunden" >&2; exit 1
