# 🚀 RapidAI

RapidAI is a full-stack AI SaaS platform that enables users to generate AI-powered content, create images, review resumes, remove image backgrounds, and interact with a community of AI-generated creations. The application provides a modern user experience with authentication, subscription plans, usage tracking, and cloud-based media processing.

## 🌐 Live Demo

🔗 **Application:** https://rapid-ai-nu.vercel.app/
## ✨ Features

### 🤖 AI Content Generation

* Generate high-quality articles using Google Gemini AI
* Create engaging blog titles instantly
* Adjustable content length and creativity settings

### 🎨 AI Image Generation

* Generate images from text prompts
* Cloud storage using Cloudinary
* Publish creations to the community feed

### 🖼️ Image Editing

* Remove image backgrounds automatically
* Remove unwanted objects from images using AI

### 📄 Resume Review

* Upload PDF resumes
* ATS score analysis
* Strengths & weaknesses detection
* Resume improvement suggestions
* ATS optimization recommendations
* Professional summary generation

### 👥 Community Platform

* Share AI-generated creations publicly
* Like and interact with community posts
* Browse creations from other users

### 🔐 Authentication & User Management

* Secure authentication with Clerk
* Free and Premium subscription plans
* Usage limits for free users
* User-specific creation history

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* PostgreSQL
* Neon Database

### AI Services

* Google Gemini 2.5 Flash
* ClipDrop Image Generation API

### Cloud Services

* Cloudinary
* Clerk Authentication

### File Processing

* Multer
* PDF Parse

---

## 📂 Project Structure

```bash
RapidAI
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Community.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── WriteArticle.jsx
│   │   │   ├── BlogTitle.jsx
│   │   │   ├── ResumeReview.jsx
│   │   │   ├── RemoveBackground.jsx
│   │   │   └── RemoveObject.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── Server/
│   ├── configs/
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   │   ├── aiController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── multer.js
│   │
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Features Overview

| Feature               | Free Plan | Premium Plan |
| --------------------- | --------- | ------------ |
| Article Generation    | ✅ 10 Uses | Unlimited    |
| Blog Title Generation | ✅ 10 Uses | Unlimited    |
| AI Image Generation   | ❌         | ✅            |
| Background Removal    | ❌         | ✅            |
| Object Removal        | ❌         | ✅            |
| Resume Review         | ❌         | ✅            |
| Community Sharing     | ✅         | ✅            |

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/rapidai.git
cd rapidai
```

### 2. Backend Setup

```bash
cd Server
npm install
```

Create a `.env` file inside the Server folder:

```env
DATABASE_URL=

CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=

GEMINI_API_KEY=

CLIPDROP_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Start Backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the client folder:

```env
VITE_BACKEND_URL=http://localhost:5000

VITE_CLERK_PUBLISHABLE_KEY=
```

Start Frontend:

```bash
npm run dev
```

---

## 🔌 API Endpoints

### AI Routes

| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | /api/ai/generate-article  | Generate article         |
| POST   | /api/ai/blog-title        | Generate blog titles     |
| POST   | /api/ai/generate-image    | Generate image           |
| POST   | /api/ai/remove-background | Remove image background  |
| POST   | /api/ai/remove-object     | Remove object from image |
| POST   | /api/ai/resume-review     | Analyze uploaded resume  |

### User Routes

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | /api/user/creations   | User creations       |
| GET    | /api/user/community   | Public creations     |
| POST   | /api/user/toggle-like | Like/Unlike creation |

---

## 📸 Screenshots


* Home Page
<img width="2776" height="7190" alt="image" src="https://github.com/user-attachments/assets/c4f45a41-146c-45c2-a659-a998c29da8fc" />

* Dashboard
<img width="2776" height="2146" alt="rapid-m43qkeoue-mitesh-bhoirs-projects vercel app_ai" src="https://github.com/user-attachments/assets/7341f373-6b71-4b18-bf4a-73fa9c4900a6" />

* AI Image Generator
<img width="2776" height="2146" alt="rapid-m43qkeoue-mitesh-bhoirs-projects vercel app_ai (3)" src="https://github.com/user-attachments/assets/ab2d0ee1-4417-46ff-9c67-2bb074b8a300" />

* Resume Reviewer
<img width="2776" height="2146" alt="rapid-m43qkeoue-mitesh-bhoirs-projects vercel app_ai (6)" src="https://github.com/user-attachments/assets/7d0a2551-c008-4b40-b7c2-cb1d10931bab" />

* Background Removal
<img width="2776" height="2146" alt="image" src="https://github.com/user-attachments/assets/c67a449b-d69d-4afd-adf3-2bef6a9aa569" />

* Object Removal
<img width="2776" height="2146" alt="rapid-m43qkeoue-mitesh-bhoirs-projects vercel app_ai (5)" src="https://github.com/user-attachments/assets/aaec074d-cbf6-4942-9855-585ead580811" />

* Community Feed
<img width="2776" height="2146" alt="rapid-m43qkeoue-mitesh-bhoirs-projects vercel app_ai (7)" src="https://github.com/user-attachments/assets/8d972cf9-f00b-4929-a018-a7f4eeb23547" />


---

## 🔒 Security Features

* Clerk Authentication
* Protected Routes
* Usage Limiting
* Secure File Uploads
* Cloud-Based Media Storage
* Environment Variable Protection

---

## 🌟 Future Enhancements

* AI Chat Assistant
* PDF Summarizer
* Text-to-Speech
* AI Code Generator
* AI Video Generation
* Team Workspaces
* Subscription Payments with Stripe

---

## 👨‍💻 Author

**Mitesh Bhoir**

* Full Stack Developer
* AI/ML Engineer

---

## 📄 License

This project is licensed under the MIT License.

Feel free to fork, improve, and contribute to RapidAI.
