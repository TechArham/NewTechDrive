#!/bin/bash

# ─────────────────────────────────────────
#  TechDrive — VPS Deploy Script
#  Server : root@168.231.126.204
#  Path   : /var/www/NewTechDrive
# ─────────────────────────────────────────

set -e

REMOTE_USER="root"
REMOTE_HOST="168.231.126.204"
REMOTE_PATH="/var/www/NewTechDrive"

echo "🚀 Deploying to $REMOTE_HOST..."

ssh $REMOTE_USER@$REMOTE_HOST bash << 'EOF'
  set -e

  PROJECT_DIR="/var/www/NewTechDrive"

  # ── 1. Repo clone kora na thakle ──
  if [ ! -d "$PROJECT_DIR/.git" ]; then
    echo "📦 Cloning repository..."
    git clone https://github.com/TechArham/NewTechDrive.git $PROJECT_DIR
  fi

  cd $PROJECT_DIR

  # ── 2. Latest code pull ──
  echo "⬇️  Pulling latest code..."
  git pull origin main

  # ── 3. Dependencies install (.env, .next, node_modules bady) ──
  echo "📥 Installing dependencies..."
  npm install --omit=dev

  # ── 4. Build ──
  echo "🔨 Building..."
  npm run build

  # ── 5. PM2 diye restart (na thakle start) ──
  echo "♻️  Restarting app with PM2..."
  if pm2 list | grep -q "techdrive"; then
    pm2 restart techdrive
  else
    pm2 start npm --name "techdrive" -- start
    pm2 save
  fi

  echo "✅ Deploy complete!"
EOF
