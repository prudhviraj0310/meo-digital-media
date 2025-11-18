# 🚀 Coolify Deployment Guide

Complete guide to deploy MEO Digital Media website on Coolify.

---

## 📋 Prerequisites

- ✅ Coolify instance running
- ✅ Domain name (optional but recommended)
- ✅ Git repository (GitHub/GitLab/Gitea)

---

## 🔧 Step 1: Prepare Your Repository

### 1.1 Commit All Changes
```bash
git add .
git commit -m "feat: add Coolify deployment configuration"
git push origin main
```

### 1.2 Verify Required Files
Make sure these files are in your repository:
- ✅ `Dockerfile`
- ✅ `.dockerignore`
- ✅ `next.config.mjs` (with `output: 'standalone'`)
- ✅ `package.json`
- ✅ `.env.local` (add to `.gitignore` - don't commit!)

---

## 🌐 Step 2: Create Project in Coolify

### 2.1 Add New Project
1. Log in to your Coolify dashboard
2. Click **"+ New Resource"**
3. Select **"Application"**
4. Choose **"Public Repository"** or connect your Git provider

### 2.2 Configure Repository
- **Repository URL**: `https://github.com/prudhviraj0310/meo-digital-media`
- **Branch**: `main`
- **Build Pack**: Select **"Dockerfile"**

---

## ⚙️ Step 3: Environment Variables

Add these environment variables in Coolify:

### Required Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="MEO Digital Media"
```

### Optional but Recommended
```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Form (if implemented)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_FORM_TO_EMAIL=info@meodigitalmedia.com

# Social Media
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/your-company
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your-account
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/your-account
NEXT_PUBLIC_DRIBBBLE_URL=https://dribbble.com/your-account
```

---

## 🔨 Step 4: Build Configuration

### 4.1 Build Settings
In Coolify, configure:

- **Port**: `3000`
- **Build Command**: Automatic (uses Dockerfile)
- **Start Command**: Automatic (uses Dockerfile CMD)
- **Base Directory**: `/` (root)

### 4.2 Health Check (Optional)
- **Path**: `/`
- **Port**: `3000`
- **Interval**: `30s`
- **Timeout**: `10s`
- **Retries**: `3`

---

## 🌍 Step 5: Domain Configuration

### 5.1 Add Domain
1. In your application settings, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain: `meodigitalmedia.com`
4. Enable **"Generate SSL"** (Let's Encrypt)

### 5.2 DNS Configuration
Point your domain to Coolify server:

**A Record:**
```
@ → YOUR_COOLIFY_SERVER_IP
www → YOUR_COOLIFY_SERVER_IP
```

**Or CNAME (if using subdomain):**
```
subdomain → your-coolify-domain.com
```

---

## 🚀 Step 6: Deploy

### 6.1 Manual Deployment
1. Click **"Deploy"** button in Coolify
2. Watch the build logs
3. Wait for deployment to complete (2-5 minutes)

### 6.2 Auto-Deploy (Webhook)
Enable auto-deployment on git push:
1. Go to **"Git"** settings in Coolify
2. Copy the webhook URL
3. Add webhook to your GitHub repository:
   - Settings → Webhooks → Add webhook
   - Paste Coolify webhook URL
   - Select "Just the push event"
   - Save

---

## ✅ Step 7: Post-Deployment Checklist

### Verify Deployment
- [ ] Website loads: `https://yourdomain.com`
- [ ] SSL certificate active (🔒 green padlock)
- [ ] All pages work (Home, About, Services, etc.)
- [ ] Images load properly
- [ ] Analytics tracking (check GA dashboard)
- [ ] Contact form sends emails (if implemented)
- [ ] Mobile responsive
- [ ] Performance (test with Lighthouse)

### Test These URLs
- ✅ Homepage: `/`
- ✅ About: `/about`
- ✅ Services: `/services`
- ✅ Projects: `/projects`
- ✅ Contact: `/contact`
- ✅ 404 Page: `/test-404`

---

## 🔍 Step 8: Monitoring & Logs

### View Logs
In Coolify dashboard:
1. Click on your application
2. Go to **"Logs"** tab
3. Monitor real-time logs
4. Check for errors

### Resource Usage
Monitor:
- **CPU Usage**
- **Memory Usage**
- **Network Traffic**
- **Disk Space**

---

## 🔄 Step 9: Updates & Redeployment

### Manual Update
```bash
# Make changes to your code
git add .
git commit -m "feat: update content"
git push origin main

# Then in Coolify:
# Click "Redeploy" button
```

### Auto-Deploy
If webhook is configured, deployment happens automatically on push!

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Check logs in Coolify
# Common issues:
- Missing environment variables
- Node version mismatch
- Dependency installation errors

# Solution:
- Verify all env vars are set
- Check Dockerfile uses Node 20
- Clear build cache and redeploy
```

### Site Not Loading
```bash
# Check:
1. Port 3000 is exposed in Dockerfile
2. Application is running (check logs)
3. DNS records are correct
4. SSL certificate generated

# Solution:
- Restart application in Coolify
- Regenerate SSL certificate
- Check firewall rules
```

### Images Not Loading
```bash
# Check:
1. Unsplash domain in remotePatterns
2. Public folder copied in Dockerfile
3. Image paths are correct

# Solution:
- Verify next.config.mjs has remotePatterns
- Check Dockerfile COPY commands
- Use absolute paths for images
```

### Environment Variables Not Working
```bash
# Check:
1. Variables are prefixed with NEXT_PUBLIC_ (for client-side)
2. Application was redeployed after adding vars
3. No typos in variable names

# Solution:
- Redeploy after adding env vars
- Check variable names match code
- Verify in Coolify env settings
```

---

## 📊 Performance Optimization

### Enable Caching
In Coolify, configure:
- **Static Asset Caching**: Enable
- **CDN**: Optional (Cloudflare)

### Optimize Images
```bash
# Already configured in next.config.mjs
- AVIF format enabled
- WebP fallback
- Automatic optimization
```

### Enable Gzip/Brotli
```bash
# Already enabled in next.config.mjs
compress: true
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
- ✅ Never commit `.env.local` to Git
- ✅ Use Coolify's secret management
- ✅ Rotate sensitive keys regularly

### 2. SSL/TLS
- ✅ Always use HTTPS (Let's Encrypt)
- ✅ Enable HSTS headers
- ✅ Use TLS 1.3

### 3. Headers
Add security headers (already configured):
```javascript
// In next.config.mjs (add if needed)
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

---

## 💰 Cost Optimization

### Resource Allocation
- **Small Site**: 512MB RAM, 1 CPU
- **Medium Traffic**: 1GB RAM, 2 CPU
- **High Traffic**: 2GB+ RAM, 4+ CPU

### Scaling
- Enable **auto-scaling** in Coolify
- Set min/max instances
- Configure based on traffic patterns

---

## 📞 Support

### Coolify Documentation
- [Official Docs](https://coolify.io/docs)
- [Discord Community](https://discord.gg/coolify)

### Project Specific
- Check `README.md` for project setup
- Review `NEXT_STEPS.md` for improvements
- See `CHANGELOG.md` for version history

---

## ✨ Quick Reference

### Coolify Dashboard URLs
```
Application: https://coolify.yourdomain.com/project/[PROJECT_ID]
Logs: https://coolify.yourdomain.com/project/[PROJECT_ID]/logs
Settings: https://coolify.yourdomain.com/project/[PROJECT_ID]/settings
```

### Common Commands
```bash
# View logs
docker logs [CONTAINER_ID]

# Restart application
docker restart [CONTAINER_ID]

# Check resources
docker stats [CONTAINER_ID]
```

---

## 🎉 You're Done!

Your MEO Digital Media website should now be live on Coolify! 

**Live URL**: https://yourdomain.com

### Next Steps:
1. ✅ Test all functionality
2. ✅ Set up monitoring (Sentry, LogRocket)
3. ✅ Configure backups
4. ✅ Set up staging environment
5. ✅ Document deployment process for team

---

Built with ❤️ for MEO Digital Media
Deployed on Coolify 🚀
