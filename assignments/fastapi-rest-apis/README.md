# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn to build modern, production-ready REST APIs using the FastAPI framework. You'll create a fully functional API with asynchronous request handling, data validation, automatic documentation, and proper HTTP status codes while understanding core REST principles.

## 📝 Tasks

### 🛠️ Build a Task Management REST API

#### Description
Create a complete REST API for a task management system using FastAPI. Implement endpoints for creating, retrieving, updating, and deleting tasks. The API should validate input data, handle errors gracefully, and provide automatic interactive documentation.

#### Requirements
Your completed API must:

- Implement GET endpoint to retrieve all tasks
- Implement GET endpoint to retrieve a single task by ID
- Implement POST endpoint to create a new task with validation
- Implement PUT endpoint to update an existing task
- Implement DELETE endpoint to remove a task
- Use proper HTTP status codes (200, 201, 404, 422, etc.)
- Include data validation using Pydantic models
- Handle errors with appropriate error messages
- Provide automatic Swagger/OpenAPI documentation via `/docs` endpoint
- Use async/await for asynchronous request handling

### 🛠️ Add Advanced Features

#### Description
Extend your API with filtering, sorting, and pagination capabilities. Implement query parameters that allow clients to retrieve data in the way they need it.

#### Requirements
Your completed features must:

- Support filtering tasks by status (e.g., `?status=completed`)
- Support sorting tasks by creation date or due date
- Implement pagination with limit and offset parameters (e.g., `?limit=10&offset=0`)
- Include search functionality to find tasks by title or description
- Return metadata in responses (total count, current page, etc.)
- Validate query parameters and return meaningful error messages
