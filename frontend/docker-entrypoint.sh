#!/bin/sh
set -e

cd /app

# Bootstrap a Next.js project if not yet initialized
if [ ! -f package.json ]; then
    echo "[entrypoint] Creating Next.js project..."
    npx --yes create-next-app@latest . \
        --ts --tailwind --eslint --app \
        --src-dir --import-alias "@/*" \
        --use-npm --yes
fi

# Install dependencies
if [ ! -d node_modules ]; then
    echo "[entrypoint] Installing dependencies..."
    npm install
fi

echo "[entrypoint] Starting Next.js dev server..."
exec npm run dev
