# GitHub Repository Setup Guide

This guide will help you create a GitHub repository and push your code to both production and development branches.

## 📋 Prerequisites

- GitHub account (if you don't have one, create it at [github.com](https://github.com))
- Git is already initialized in this project ✅
- Branches are already created:
  - `production` - for production-ready code
  - `development` - for ongoing development

## 🚀 Step-by-Step Instructions

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `ProWorldAgro`
   - **Description**: `Agricultural Solutions Platform - ProWorldAgro`
   - **Visibility**: Choose **Public** (for free hosting) or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Navigate to your project
cd /Users/usamahanif/Documents/GitHub/ProWorldAgro

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ProWorldAgro.git

# Or if you prefer SSH:
# git remote add origin git@github.com:YOUR_USERNAME/ProWorldAgro.git
```

### Step 3: Push Production Branch

```bash
# Make sure you're on production branch
git checkout production

# Push production branch to GitHub
git push -u origin production
```

### Step 4: Push Development Branch

```bash
# Switch to development branch
git checkout development

# Push development branch to GitHub
git push -u origin development
```

### Step 5: Set Default Branch (Optional but Recommended)

1. Go to your repository on GitHub
2. Click **Settings** → **Branches**
3. Under **Default branch**, select **production**
4. Click **Update**

## ✅ Verify Setup

After pushing, you should see:
- ✅ Two branches: `production` and `development`
- ✅ All your code files in both branches
- ✅ Repository is accessible at `https://github.com/YOUR_USERNAME/ProWorldAgro`

## 🔄 Daily Workflow

### Working on Development:

```bash
# Switch to development branch
git checkout development

# Make your changes, then:
git add .
git commit -m "Your commit message"
git push origin development
```

### Deploying to Production:

```bash
# Switch to production branch
git checkout production

# Merge changes from development
git merge development

# Push to production
git push origin production
```

## 🎯 Quick Commands Reference

```bash
# Check current branch
git branch

# Switch branches
git checkout production
git checkout development

# See all branches (local and remote)
git branch -a

# Push current branch
git push origin <branch-name>

# Pull latest changes
git pull origin <branch-name>
```

## 📝 Branch Strategy

- **production**: Stable, tested code ready for deployment
- **development**: Active development work, new features, bug fixes

## 🔗 Next Steps

After pushing to GitHub, you can:
1. **Deploy to Vercel** - Connect your GitHub repo for automatic deployments
2. **Set up CI/CD** - Automate testing and deployment
3. **Collaborate** - Invite team members to contribute

---

## 🆘 Troubleshooting

**"remote origin already exists" error?**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ProWorldAgro.git
```

**"Permission denied" error?**
- Make sure you're authenticated with GitHub
- Use `gh auth login` if you have GitHub CLI
- Or use SSH keys instead of HTTPS

**Want to see what will be pushed?**
```bash
git log origin/production..production  # See commits not yet pushed
```

---

**Need help?** Check the [GitHub Documentation](https://docs.github.com)



