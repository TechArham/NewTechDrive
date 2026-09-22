#!/bin/bash

# ─────────────────────────────────────────
#  TechDrive — VPS Deploy Script (rsync)
#  Server : root@168.231.126.204
#  Path   : /var/www/NewTechDrive
# ─────────────────────────────────────────

set -e

REMOTE_USER="root"
REMOTE_HOST="168.231.126.204"
REMOTE_PATH="/var/www/NewTechDrive"
LOCAL_PATH="/Users/user/Desktop/slider"

echo "🚀 Deploying to $REMOTE_HOST..."

# ── 1. rsync diye file transfer (.env, .next, node_modules bady) ──
echo "📤 Transferring files..."
rsync -avz --progress \
  --exclude='.env' \
  --exclude='.env.*' \
  --exclude='.next/' \
  --exclude='node_modules/' \
  --exclude='.git/' \
  --exclude='.DS_Store' \
  --exclude='*.tsbuildinfo' \
  --exclude='next-env.d.ts' \
  "$LOCAL_PATH/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"

# ── 2. VPS-a giye install + build + restart ──
echo "🔧 Running remote commands..."
ssh $REMOTE_USER@$REMOTE_HOST bash << EOF
  set -e
  cd $REMOTE_PATH

  echo "📥 Installing dependencies..."
  npm install --omit=dev

  echo "🔨 Building..."
  npm run build

  echo "♻️  Restarting app with PM2..."
  if pm2 list | grep -q "techdrive"; then
    pm2 restart techdrive
  else
    pm2 start npm --name "techdrive" -- start
    pm2 save
  fi

  echo "✅ Deploy complete!"
EOF
