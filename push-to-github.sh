#!/bin/bash

# ProWorldAgro - GitHub Push Script
# This script helps you push your code to GitHub

echo "🚀 ProWorldAgro - GitHub Push Script"
echo "======================================"
echo ""

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' is already configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "   Current remote: $REMOTE_URL"
    echo ""
    read -p "Do you want to use this remote? (y/n): " use_existing
    if [ "$use_existing" != "y" ]; then
        read -p "Enter your GitHub repository URL (e.g., https://github.com/username/ProWorldAgro.git): " repo_url
        git remote set-url origin "$repo_url"
        echo "✅ Remote updated"
    fi
else
    echo "❌ No remote repository configured"
    echo ""
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/ProWorldAgro.git): " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote added"
fi

echo ""
echo "📦 Pushing branches to GitHub..."
echo ""

# Push production branch
echo "1️⃣  Pushing production branch..."
git checkout production
git push -u origin production

if [ $? -eq 0 ]; then
    echo "✅ Production branch pushed successfully!"
else
    echo "❌ Failed to push production branch"
    exit 1
fi

echo ""

# Push development branch
echo "2️⃣  Pushing development branch..."
git checkout development
git push -u origin development

if [ $? -eq 0 ]; then
    echo "✅ Development branch pushed successfully!"
else
    echo "❌ Failed to push development branch"
    exit 1
fi

echo ""
echo "🎉 Success! Both branches have been pushed to GitHub"
echo ""
echo "📋 Summary:"
echo "   - Production branch: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/tree/production"
echo "   - Development branch: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/tree/development"
echo ""
echo "💡 Next steps:"
echo "   1. Go to your GitHub repository"
echo "   2. Set 'production' as the default branch (Settings → Branches)"
echo "   3. Connect to Vercel for automatic deployments"
echo ""





