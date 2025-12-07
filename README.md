# 🌾 ProWorldAgro

Agricultural Solutions Platform - A comprehensive web application for agricultural professionals, farmers, and businesses.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Branch Strategy](#branch-strategy)
- [Contributing](#contributing)

## ✨ Features

- 🌐 Multi-language support (English & Urdu)
- 📱 Responsive design with modern UI
- 🎨 Glassmorphism design theme
- 📝 Agent of Documentation services
- 📅 Event registration and management
- 📰 Blog system
- 🗺️ Location mapping (Peshawar)
- 🔐 User authentication and registration

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router
- i18next (Internationalization)
- Axios
- CSS3 with Glassmorphism

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📁 Project Structure

```
ProWorldAgro/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── i18n/        # Translation files
│   │   └── services/    # API services
│   └── public/
├── backend/           # Node.js backend API
│   ├── routes/       # API routes
│   ├── models/       # Database models
│   └── middleware/   # Express middleware
└── docs/             # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ProWorldAgro.git
   cd ProWorldAgro
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**
   
   Backend (`backend/.env`):
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:3000
   ```
   
   Frontend (`frontend/.env`):
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Run the application**
   
   Frontend (terminal 1):
   ```bash
   cd frontend
   npm start
   ```
   
   Backend (terminal 2):
   ```bash
   cd backend
   npm start
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📦 Deployment

### Frontend Deployment (Vercel)

1. **Quick Deploy**
   ```bash
   cd frontend
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **Or connect via GitHub**
   - Push code to GitHub
   - Import project on [Vercel](https://vercel.com)
   - Set root directory to `frontend`
   - Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🌿 Branch Strategy

This project uses a two-branch strategy:

- **`production`** - Stable, tested code ready for deployment
- **`development`** - Active development work, new features, bug fixes

### Workflow

```bash
# Work on development
git checkout development
# Make changes, commit, push

# Deploy to production
git checkout production
git merge development
git push origin production
```

## 📚 Documentation

- [Setup Guide](./SETUP.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Quick Deploy](./QUICK_DEPLOY.md)
- [GitHub Setup](./GITHUB_SETUP.md)
- [MongoDB Atlas Setup](./MONGODB_ATLAS_SETUP.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch from `development`
3. Make your changes
4. Commit and push to your fork
5. Create a Pull Request to `development` branch

## 📄 License

This project is for demonstration purposes.

## 👥 Authors

ProWorldAgro Team

## 🙏 Acknowledgments

- React Community
- Vercel for hosting
- MongoDB Atlas

---

**Made with ❤️ for the agricultural community**
