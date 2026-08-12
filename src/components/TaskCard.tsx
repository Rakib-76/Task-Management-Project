import React from 'react';
import { Task } from '@/types/task';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const statusColors = {
    'To Do': 'bg-gray-100 text-gray-800 border-gray-200',
    'In Progress': 'bg-blue-50 text-blue-700 border-blue-200',
    'Done': 'bg-green-50 text-green-700 border-green-200',
  };

  const priorityColors = {
    'Low': 'bg-gray-100 text-gray-700',
    'Medium': 'bg-yellow-50 text-yellow-700',
    'High': 'bg-red-50 text-red-700',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex justify-between items-start mb-3 gap-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2" title={task.title}>
          {task.title}
        </h3>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap border ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-3">
        {task.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-5 text-xs">
        <span className={`px-2 py-1 rounded-md font-medium ${priorityColors[task.priority]}`}>
          Priority: {task.priority}
        </span>
        <span className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-md flex items-center font-medium">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
      
      <div className="flex justify-end gap-2 mt-auto pt-4 border-t border-gray-100">
        <button className="text-sm px-3 py-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium">
          Edit
        </button>
        <button className="text-sm px-3 py-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium">
          Delete
        </button>
      </div>
    </div>
  );
}
