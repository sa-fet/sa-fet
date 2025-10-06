# GitHub Pages Deployment Guide

## Prerequisites
- Git installed
- GitHub account
- Repository created

## Step 1: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: SA-FET Homepage"
```

## Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages
```bash
pnpm deploy
```

This will:
1. Build the production version
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Custom Domain Setup (sa-fet.com)

### A. DNS Configuration
Add these records in your domain registrar:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

### B. GitHub Configuration
1. Go to **Settings** > **Pages**
2. Under "Custom domain", enter: `sa-fet.com`
3. Click **Save**
4. Wait for DNS check to complete
5. Enable **Enforce HTTPS** (recommended)

### C. Subdomain Configuration
If using a subdomain (e.g., www.sa-fet.com):
```
CNAME   www     YOUR_USERNAME.github.io
```

## Redeployment

To update the site after making changes:
```bash
git add .
git commit -m "Update: description of changes"
git push
pnpm deploy
```

## Troubleshooting

### Site not loading
- Check if `gh-pages` branch exists
- Verify GitHub Pages source is set correctly
- Wait 5-10 minutes for initial deployment

### Custom domain not working
- Verify DNS records are correct (use `nslookup sa-fet.com`)
- DNS propagation can take 24-48 hours
- Ensure CNAME file exists in `public/` folder

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules .pnpm-store dist
pnpm install
pnpm build
```

## Automated Deployment (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This will automatically deploy on every push to `main`.

## Support

For issues, contact: tech@sa-fet.com
