"""
FastAPI Task Management REST API Starter Code

This is a starter template for building a REST API with FastAPI.
Complete the implementation following the assignment requirements.
"""

from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

# Initialize FastAPI app
app = FastAPI(
    title="Task Management API",
    description="A REST API for managing tasks",
    version="1.0.0"
)

# ============================================================================
# Data Models (Pydantic)
# ============================================================================

class TaskStatus(str, Enum):
    """Enumeration for task status values"""
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


class TaskBase(BaseModel):
    """Base task model with common fields"""
    title: str = Field(..., min_length=1, max_length=255, description="Task title")
    description: Optional[str] = Field(None, max_length=1000, description="Task description")
    status: TaskStatus = Field(default=TaskStatus.TODO, description="Current task status")


class TaskCreate(TaskBase):
    """Model for creating a new task"""
    pass


class TaskUpdate(BaseModel):
    """Model for updating an existing task"""
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    description: Optional[str] = Field(None, max_length=1000)
    status: Optional[TaskStatus] = None


class Task(TaskBase):
    """Complete task model with metadata"""
    id: int = Field(..., description="Task ID")
    created_at: datetime = Field(default_factory=datetime.now, description="Creation timestamp")
    updated_at: datetime = Field(default_factory=datetime.now, description="Last update timestamp")

    class Config:
        from_attributes = True


# ============================================================================
# In-Memory Data Store (for this assignment)
# ============================================================================

# Simulated database - store tasks in memory
tasks_db: dict[int, dict] = {}
next_task_id = 1


# ============================================================================
# API Endpoints
# ============================================================================

@app.get("/", tags=["Root"])
async def root():
    """Root endpoint - API welcome message"""
    return {
        "message": "Welcome to Task Management API",
        "docs": "/docs",
        "openapi_schema": "/openapi.json"
    }


# TODO: Implement GET /tasks - retrieve all tasks with optional filtering
@app.get("/tasks", response_model=List[Task], tags=["Tasks"])
async def get_all_tasks():
    """
    Retrieve all tasks with optional filtering and pagination.
    
    Query Parameters:
    - status: Filter by task status (todo, in_progress, completed)
    - limit: Number of tasks to return (default: 10)
    - offset: Number of tasks to skip (default: 0)
    - search: Search in task title and description
    """
    # Your implementation here
    pass


# TODO: Implement GET /tasks/{task_id} - retrieve a single task
@app.get("/tasks/{task_id}", response_model=Task, tags=["Tasks"])
async def get_task(task_id: int):
    """Retrieve a specific task by ID"""
    # Your implementation here
    pass


# TODO: Implement POST /tasks - create a new task
@app.post("/tasks", response_model=Task, status_code=201, tags=["Tasks"])
async def create_task(task: TaskCreate):
    """Create a new task"""
    # Your implementation here
    pass


# TODO: Implement PUT /tasks/{task_id} - update a task
@app.put("/tasks/{task_id}", response_model=Task, tags=["Tasks"])
async def update_task(task_id: int, task_update: TaskUpdate):
    """Update an existing task"""
    # Your implementation here
    pass


# TODO: Implement DELETE /tasks/{task_id} - delete a task
@app.delete("/tasks/{task_id}", status_code=204, tags=["Tasks"])
async def delete_task(task_id: int):
    """Delete a task"""
    # Your implementation here
    pass


# ============================================================================
# Run the app
# ============================================================================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
