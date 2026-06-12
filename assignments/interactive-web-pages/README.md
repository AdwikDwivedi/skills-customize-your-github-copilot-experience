# 📘 Assignment: Building Interactive Web Pages with JavaScript

## 🎯 Objective

Learn to build interactive user interfaces using HTML, CSS, and vanilla JavaScript. You'll create a fully functional task manager web application, then connect it to a backend REST API—combining frontend and backend skills to create a complete full-stack experience.

## 📝 Tasks

### 🛠️ Build a Task Manager Web Interface

#### Description
Create a responsive web application with HTML structure, professional styling with CSS, and interactive JavaScript functionality. The interface should allow users to manage a list of tasks with a clean, intuitive design.

#### Requirements
Your completed interface must:

- Display a list of tasks with title and status (todo, in_progress, completed)
- Provide an input form to add new tasks
- Include buttons to mark tasks as completed or delete them
- Apply CSS styling for a professional appearance with responsive design
- Use vanilla JavaScript to handle all user interactions
- Store tasks in the browser's localStorage for persistence across page reloads
- Include visual feedback (disabled buttons, loading states, success messages)

### 🛠️ Connect to the FastAPI Backend

#### Description
Integrate your frontend application with the REST API from the "Building REST APIs with FastAPI" assignment. Fetch and display real task data from the backend instead of using mock data.

#### Requirements
Your completed integration must:

- Make API calls to fetch all tasks when the page loads
- Send POST requests to create new tasks
- Send PUT requests to update task status
- Send DELETE requests to remove tasks
- Handle API errors gracefully and display user-friendly messages
- Use async/await for asynchronous API calls
- Display loading indicators while waiting for API responses
- Keep the local UI in sync with backend data
