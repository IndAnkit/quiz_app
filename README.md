# Quiz App

Welcome to the **Quiz App**! This is a simple and interactive quiz application that allows users to take quizzes and view their scores. The project is split into two parts:

- **Backend**: Handles API requests, data storage, and quiz logic.
- **Frontend**: A React-based interface for users to interact with the app.

## Table of Contents

- [Run Locally](#run-locally)
  - [Clone the Project](#clone-the-project)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Run Locally

To get the project running on your local machine, follow the steps below.

### Clone the Project

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/IndAnkit/quiz_app
```

#### Navigate to the project directory:
```bash
cd quiz_app
```

### Backend Setup
Now, let's set up the backend.
#### 1.Go to the Backend Directory:
```bash
cd backend
```
#### 2.Create a .env file:
In the backend directory, create a .env file and add the following values (replace with your actual values):
```text
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
POST=your_port
```

#### 3.Install Dependencies:
Install the required dependencies for the backend:
```bash
npm i
```
#### 4.Start the Server:
Start the backend server in development mode:
```bash
npm run dev
```

### Frontend Setup

This is the frontend for the application. It interacts with the backend API to display and manage quiz data.

#### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16.x or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

#### Getting Started

Follow these steps to set up and run the frontend locally:

#### 1. Navigate to the Frontend Directory

First, navigate to the `frontend` directory:

```bash
cd frontend
```
#### 2.Create a .env File
In the frontend directory, create a .env file to store environment variables. Add the following content to point the frontend to your backend API:
```
VITE_API_URL=http://localhost:8002/api/v1  // Replace with your backend server URL
```
Make sure to replace the URL with the actual backend server URL if it's different from the default http://localhost:8002.

#### 3. Start the Frontend
Once the dependencies are installed, start the frontend development server:
```bash
npm run dev
```
This will start the frontend on http://localhost:3000 (or another port if specified). Open this URL in your browser to access the application.





## License

[MIT](https://choosealicense.com/licenses/mit/)

