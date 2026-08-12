"use client";

import React, { useState } from 'react';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import ConfirmDialog from '@/components/ConfirmDialog';
import { createTaskId } from '@/utils/taskUtils';

// Initial Mock Data
const INITIAL_TASKS = [
  {
    id: createTaskId(),
    title: 'Initialize Next.js project',
    description: 'Set up the Next.js 13+ App Router project with Tailwind CSS and TypeScript configuration.',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-08-15',
  },
  {
    id: createTaskId(),
    title: 'Design Task Board UI',
    description: 'Create professional, responsive task cards and layout components. Ensure empty states and filters look polished without adding actual logic yet.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-08-16',
  },
  {
    id: createTaskId(),
    title: 'Implement LocalStorage logic',
    description: 'Add state management using React hooks to persist tasks to the browser local storage so they survive page refreshes.',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2026-08-18',
  },
  {
    id: createTaskId(),
    title: 'Refactor and Write Documentation',
    description: 'Explain the component hierarchy and choices made during development for the technical interview review.',
    status: 'To Do',
    priority: 'Low',
    dueDate: '2026-08-20',
  }
];

export default function Home() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  
  // Form Modal State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Confirm Dialog State
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleFormSubmit = (taskData) => {
    if (isEditing) {
      // Update existing task
      setTasks((prevTasks) => 
        prevTasks.map((t) => (t.id === taskData.id ? taskData : t))
      );
    } else {
      // Create new task
      setTasks((prevTasks) => [taskData, ...prevTasks]);
    }
    setIsFormOpen(false);
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const handleCreateClick = () => {
    setSelectedTask(null);
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskToDelete.id));
    }
    setIsConfirmOpen(false);
    setTaskToDelete(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Task Board</h1>
          <p className="text-gray-500 mt-1">Manage your tasks simply and efficiently</p>
        </div>
        <button 
          onClick={handleCreateClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm whitespace-nowrap"
        >
          Create Task
        </button>
      </header>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search tasks by title..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-shadow"
          />
        </div>
        <div className="w-full sm:w-48">
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 cursor-pointer transition-shadow"
          >
            <option value="All">All Statuses</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>

      {/* Task List Section */}
      <main>
        <TaskList 
          tasks={tasks} 
          onEdit={handleEditClick} 
          onDelete={handleDeleteClick}
        />
      </main>

      {/* Modal Overlay for Task Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="w-full max-w-2xl my-8">
            <TaskForm 
              initialTask={selectedTask}
              onSubmit={handleFormSubmit}
              onCancel={() => setIsFormOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Confirmation Dialog for Deletion */}
      <ConfirmDialog 
        isOpen={isConfirmOpen}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </div>
  );
}
