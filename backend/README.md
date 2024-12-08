# Backend Setup
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

# Quiz App API Documentation

This document provides details for the available API endpoints in the **Quiz App**.

### **Base URL:**
`http://localhost:8002/api/v1`

---

## **Endpoints**

### **1. Get User Information**
- **Method:** `GET`
- **Endpoint:** `/users`
- **Description:** Returns mock user details of users who are attending the quiz.

#### Example Response:
```json
{
  "status": "success",
  "data": {
    "user_id": 21,
    "username": "guest_21",
    "created_at": "2024-12-08T17:07:25.910Z"
  }
}
```
### **2. Create Sample Questions**
- **Method:** `GET`
- **Endpoint:** `/question/createSample`
- **Description:** Creates sample quiz questions for the app.

#### Example Response:
```json
{
  "message": "Sample questions created successfully"
}
```

### **3. Create Sample Questions**
- **Method:** `GET`
- **Endpoint:** `/users/{id}`
- **Description:** Returns the mock user details based on the provided user ID
#### Parameters:
- **id**: The unique identifier of the user (e.g., 1).
#### Example Response:
```json
{
  "status": "success",
  "data": {
    "user_id": 21,
    "username": "guest_21",
    "created_at": "2024-12-08T17:07:25.910Z"
  }
}
```

### **4. Start Quiz**
- **Method:** `GET`
- **Endpoint:** `/quiz/{id}`
- **Description:** Starts the quiz for a user by quiz ID.
#### Parameters:
- **id**: The unique identifier of the quiz (e.g., 1).
#### Example Response:
```json
{
  "status": "success",
  "data": {
    "quiz": {
      "title": "quiz_m8rnkp9h0oi",
      "created_at": "2024-12-08T18:11:21.084Z",
      "status": "active",
      "quiz_id": 33
    },
    "quiz_id": 33,
    "title": "quiz_m8rnkp9h0oi",
    "status": "active",
    "currentQuestionIndex": 0,
    "questions": [
      {
        "question_id": 5,
        "text": "Which animal is known as the King of the Jungle?",
        "image_url": null,
        "question_type": "single",
        "options": [
          {
            "choice_id": 17,
            "text": "Elephant",
            "is_correct": false
          },
          {
            "choice_id": 18,
            "text": "Tiger",
            "is_correct": false
          },
          {
            "choice_id": 19,
            "text": "Lion",
            "is_correct": true
          },
          {
            "choice_id": 20,
            "text": "Bear",
            "is_correct": false
          }
        ]
      },
      
    ]
  }
}
```
### **5. Submit Answer**
- **Method:** `POST`
- **Endpoint:** `/question/submit`
- **Description:** Submits answers for the question
#### Request Body::
```json
{
  "answers": {
    "3": true,
    "10": true
  },
  "question_id": 1,
  "time_taken": 90340,
  "quiz_id": 32,
  "user_id": 21
}
```
#### Example Response:
```json
{
  "message": "Answer submitted successfully"
}
```

### **6. Get Quiz Score**
- **Method:** `GET`
- **Endpoint:** `/score/{quizId}`
- **Description:** Retrieves the score for a specific quiz.
#### Parameters:
- **quizId**: The ID of the quiz whose score is being requested (e.g., 32).
#### Example Response:
```json
{
  "status": "success",
  "data": {
    "totalQuestions": 5,
    "correctAnswer": 0,
    "incorrectAnswer": 5
  }
}
```

