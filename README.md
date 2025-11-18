# Mock Interview Platform

A comprehensive AI-powered mock interview platform that helps users prepare for job interviews through personalized AI-generated questions, real-time emotion analysis, and detailed feedback.

## Features

- **AI-Generated Interviews**: Create customized mock interviews based on job position, description, and experience level
- **Real-time Emotion Analysis**: Webcam-based emotion detection during interviews using face-api.js
- **Speech-to-Text**: Record and transcribe answers using speech recognition
- **Feedback System**: Get AI-powered feedback on your answers and performance
- **User Authentication**: Secure JWT-based authentication system
- **Responsive Design**: Modern UI built with Next.js and Tailwind CSS
- **Dashboard**: Track your interview progress and history

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **Next.js 15** with App Router
- **React 19** with hooks
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Axios** for API calls
- **face-api.js** for emotion detection
- **react-webcam** for camera access
- **react-hook-speech-to-text** for speech recognition
- **Google Generative AI** for question generation
- **Recharts** for data visualization

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ikihsan/Mock_interview.git
   cd Mock_interview
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env.local` file in the frontend directory:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

## Running the Application

1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on http://localhost:5000

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   App will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status
- `GET /api/auth/profile` - Get user profile

### Mock Interviews
- `POST /api/mockinterview` - Create new interview
- `GET /api/mockinterview` - Get user's interviews
- `GET /api/mockinterview/:id` - Get specific interview

### User Answers
- `POST /api/useranswer` - Submit answer
- `GET /api/useranswer/:interviewId` - Get answers for interview

### Emotions
- `POST /api/emotions` - Record emotion data
- `GET /api/emotions/:interviewId` - Get emotion data

### Emotion Feedback
- `POST /api/emotionfeedback` - Submit feedback
- `GET /api/emotionfeedback/:interviewId` - Get feedback

## Project Structure

```
Mock_interview/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── lib/            # Utilities (DB, auth utils)
│   │   ├── middleware/     # Authentication middleware
│   │   ├── model/          # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   └── app.js          # Main application file
│   ├── package.json
│   └── .env
├── frontend/
│   ├── app/                # Next.js app directory
│   │   ├── (auth)/         # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.js       # Root layout
│   │   └── page.js         # Home page
│   ├── components/         # Reusable components
│   ├── lib/               # Utilities
│   ├── store/             # Zustand stores
│   ├── utils/             # Helper functions
│   ├── package.json
│   └── .env.local
├── .gitignore
└── README.md
```

## Key Components

### Backend
- **Authentication**: JWT-based with bcrypt password hashing
- **Database Models**: User, MockInterview, UserAnswer, Emotions, EmotionFeedback
- **Middleware**: Route protection and CORS handling

### Frontend
- **State Management**: Zustand stores for auth, interviews, answers, emotions
- **Emotion Analysis**: Real-time face detection and emotion recognition
- **AI Integration**: Google Gemini for generating interview questions
- **Responsive UI**: Tailwind CSS with custom components

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

For questions or support, please contact the development team.

---

**Note**: This is a development project. Ensure all dependencies are properly configured before running in production.