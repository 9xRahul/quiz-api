# Quiz API

A simple and lightweight Node.js/Express API that serves a set of computer science and technology trivia questions. It is designed to be easily deployed to platforms like Render and consumed by frontend applications like Flutter, React, or standard web apps.

## Features

- Built with Node.js and Express.
- Serves multiple-choice trivia questions.
- Includes endpoints to fetch all questions or a specific question by index.
- Includes a `/ping` endpoint to easily check the server status.
- Implements a self-pinging interval to prevent the server from sleeping on free hosting tiers (requires the `SERVER_URL` environment variable).

---

## Endpoints

### 1. Welcome Route
- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns a welcome message.

### 2. Get All Questions
- **URL:** `/questions`
- **Method:** `GET`
- **Description:** Returns a JSON array containing all trivia questions.

### 3. Get Question By Index
- **URL:** `/questions/:index`
- **Method:** `GET`
- **Description:** Returns a specific JSON question object based on its index number (e.g., 0 for the first question). Returns a `404` error if the index is out of bounds.

### 4. Ping Server
- **URL:** `/ping`
- **Method:** `GET`
- **Description:** A simple health check route that returns "Server is awake". Useful for cron jobs.

---

## Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/quiz-api.git
   cd quiz-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   # or
   node index.js
   ```

4. **Test the API:**
   Open your browser and navigate to `http://localhost:3000/questions`.

---

## Deployment (Render)

This project is fully ready to be deployed on [Render](https://render.com/).

1. Create a new **Web Service** on Render and link this repository.
2. Under settings, use the following:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
3. To prevent the free tier server from sleeping, add a new **Environment Variable**:
   - **Key:** `SERVER_URL`
   - **Value:** Your live Render URL (e.g., `https://quiz-api-yourname.onrender.com`)

The server will automatically hit its own `/ping` endpoint every 14 minutes using this variable, keeping it continuously awake!
