#!/usr/bin/env bash
set -euo pipefail

REQ_NODE="20.11.1"
have_node=$(node -v 2>/dev/null || echo "v0.0.0")
echo "Current Node: $have_node"

if command -v nvm >/dev/null 2>&1; then
  echo "Using nvm to ensure Node ${REQ_NODE} ..."
  nvm install "${REQ_NODE}"
  nvm use "${REQ_NODE}"
else
  echo "nvm not found. If the build fails, install nvm and run again."
fi

echo "Cleaning old installs..."
rm -rf node_modules package-lock.json

echo "Installing dependencies..."
npm install

echo "Running type/version checks..."
node scripts/check-node.js

echo "Building app..."
npm run build

echo "Done. To run dev server: npm run dev"
