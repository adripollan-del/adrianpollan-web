#!/bin/bash
# setup-cron.sh — Instala el cron job semanal para create-article.mjs
# Publica automáticamente el siguiente artículo del pipeline todos los lunes a las 9:00am

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_BIN="$(which node 2>/dev/null || echo '')"
LOG_FILE="$PROJECT_DIR/cron.log"

# ── Verificaciones ────────────────────────────────────────────────────────────

if [ -z "$NODE_BIN" ]; then
  echo "❌  No se encontró 'node' en PATH."
  echo "   Si usas nvm: ejecuta 'nvm use' primero y vuelve a correr este script."
  exit 1
fi

echo "📍  Proyecto : $PROJECT_DIR"
echo "📍  Node     : $NODE_BIN"
echo "📍  Log      : $LOG_FILE"
echo ""

# ── Entrada de cron ───────────────────────────────────────────────────────────
# Formato: Minuto Hora DíaMes Mes DíaSemana
#          0      9    *     *   1          = todos los lunes a las 09:00

CRON_JOB="0 9 * * 1 cd \"$PROJECT_DIR\" && \"$NODE_BIN\" \"$PROJECT_DIR/create-article.mjs\" >> \"$LOG_FILE\" 2>&1"

# ── Instalar / actualizar (sin duplicados) ────────────────────────────────────

EXISTING=$(crontab -l 2>/dev/null || true)

if echo "$EXISTING" | grep -q "create-article.mjs"; then
  echo "⚠️  Cron existente detectado — reemplazando..."
  EXISTING=$(echo "$EXISTING" | grep -v "create-article.mjs")
fi

{ echo "$EXISTING"; echo "$CRON_JOB"; } | grep -v '^$' | crontab -

echo "✅  Cron job instalado:"
echo ""
echo "   $CRON_JOB"
echo ""
echo "   ▸ Frecuencia : todos los lunes a las 9:00am"
echo "   ▸ Log        : $LOG_FILE"
echo ""
echo "   Verificar : crontab -l"
echo "   Pausar    : crontab -l | grep -v create-article | crontab -"
echo ""
echo "⚠️  macOS: el cron necesita 'Acceso total al disco' para funcionar."
echo "   Ajustes del sistema → Privacidad y seguridad → Acceso total al disco"
echo "   → añade /usr/sbin/cron"
