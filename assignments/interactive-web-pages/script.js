/**
 * Task Manager - JavaScript Application
 * 
 * This starter code provides the basic DOM structure and event listeners.
 * TODO: Implement the functions below to make the app work!
 */

// ============================================================================
// Configuration
// ============================================================================

const API_URL = 'http://localhost:8000'; // Update this when connecting to backend

// ============================================================================
// DOM Elements
// ============================================================================

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasksList');
const emptyState = document.getElementById('emptyState');
const loading = document.getElementById('loading');
const formMessage = document.getElementById('formMessage');
const apiStatusDiv = document.getElementById('apiStatus');
const apiUrlDisplay = document.getElementById('apiUrl');
const connectButton = document.getElementById('connectButton');

// ============================================================================
// State Management
// ============================================================================

let tasks = []; // Local task storage
let useBackend = false; // Whether to use backend API

// ============================================================================
// Event Listeners
// ============================================================================

taskForm.addEventListener('submit', handleAddTask);
connectButton.addEventListener('click', connectToBackend);

// Load tasks when page loads
document.addEventListener('DOMContentLoaded', initializeApp);

// ============================================================================
// Initialization
// ============================================================================

async function initializeApp() {
    console.log('Initializing Task Manager...');
    
    // TODO: Load tasks from localStorage or backend
    // For now, use sample data
    tasks = [
        { id: 1, title: 'Learn HTML & CSS', status: 'completed' },
        { id: 2, title: 'Learn JavaScript', status: 'in_progress' },
        { id: 3, title: 'Connect to REST API', status: 'todo' }
    ];
    
    renderTasks();
}

// ============================================================================
// Add Task Handler
// ============================================================================

async function handleAddTask(event) {
    event.preventDefault();
    
    const title = taskInput.value.trim();
    
    if (!title) {
        showMessage('Please enter a task title', 'error');
        return;
    }
    
    try {
        if (useBackend) {
            // TODO: Send POST request to backend API
            // const newTask = await createTaskOnBackend(title);
            showMessage('Backend connection not yet implemented', 'error');
        } else {
            // Local storage: create task locally
            const newTask = {
                id: Date.now(),
                title: title,
                status: 'todo'
            };
            
            tasks.push(newTask);
            saveToLocalStorage();
            showMessage('Task added successfully!', 'success');
        }
        
        taskInput.value = '';
        renderTasks();
    } catch (error) {
        console.error('Error adding task:', error);
        showMessage('Failed to add task. Please try again.', 'error');
    }
}

// ============================================================================
// Task Operations
// ============================================================================

/**
 * TODO: Implement updateTaskStatus
 * Updates a task's status (todo, in_progress, completed)
 */
async function updateTaskStatus(taskId, newStatus) {
    console.log(`TODO: Update task ${taskId} to status: ${newStatus}`);
}

/**
 * TODO: Implement deleteTask
 * Removes a task from the list
 */
async function deleteTask(taskId) {
    console.log(`TODO: Delete task ${taskId}`);
}

// ============================================================================
// Backend API Functions
// ============================================================================

/**
 * TODO: Implement connectToBackend
 * Tests connection to the REST API and switches to backend mode
 */
async function connectToBackend() {
    console.log(`TODO: Connect to backend at ${API_URL}`);
    // This should:
    // 1. Test connection to the API
    // 2. Fetch tasks from the backend
    // 3. Switch useBackend flag to true
    // 4. Update UI to show backend is connected
}

/**
 * TODO: Implement fetchTasksFromBackend
 * Retrieves all tasks from the REST API
 */
async function fetchTasksFromBackend() {
    console.log(`TODO: Fetch tasks from ${API_URL}/tasks`);
}

/**
 * TODO: Implement createTaskOnBackend
 * Creates a new task on the REST API
 */
async function createTaskOnBackend(title) {
    console.log(`TODO: Create task on backend: ${title}`);
}

/**
 * TODO: Implement updateTaskOnBackend
 * Updates task status on the REST API
 */
async function updateTaskOnBackend(taskId, newStatus) {
    console.log(`TODO: Update task ${taskId} on backend to status: ${newStatus}`);
}

/**
 * TODO: Implement deleteTaskOnBackend
 * Deletes a task from the REST API
 */
async function deleteTaskOnBackend(taskId) {
    console.log(`TODO: Delete task ${taskId} from backend`);
}

// ============================================================================
// Rendering
// ============================================================================

function renderTasks() {
    tasksList.innerHTML = '';
    
    if (tasks.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.status === 'completed' ? 'completed' : ''}`;
    
    const statusBadge = getStatusBadge(task.status);
    
    li.innerHTML = `
        <div class="task-info">
            <div class="task-title">${escapeHtml(task.title)}</div>
            <div class="task-status ${statusBadge.className}">${statusBadge.text}</div>
        </div>
        <div class="task-actions">
            <button class="btn btn-success" onclick="cycleTaskStatus(${task.id})">
                ${task.status === 'completed' ? '↺ Reset' : '✓ Complete'}
            </button>
            <button class="btn btn-danger" onclick="deleteTask(${task.id})">
                Delete
            </button>
        </div>
    `;
    
    return li;
}

function getStatusBadge(status) {
    const badges = {
        'todo': { text: '📋 To Do', className: 'status-todo' },
        'in_progress': { text: '⚙️ In Progress', className: 'status-in_progress' },
        'completed': { text: '✅ Completed', className: 'status-completed' }
    };
    return badges[status] || badges['todo'];
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * TODO: Implement cycleTaskStatus
 * Cycles through task statuses (todo -> in_progress -> completed -> todo)
 */
function cycleTaskStatus(taskId) {
    console.log(`TODO: Cycle status for task ${taskId}`);
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `message ${type}`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        formMessage.className = 'message';
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadFromLocalStorage() {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
}

// ============================================================================
// Debugging (Open Console to See Logs)
// ============================================================================

console.log('Task Manager app loaded. Check the console and implement TODO functions!');
console.log('Current tasks:', tasks);
console.log('Backend mode:', useBackend);
