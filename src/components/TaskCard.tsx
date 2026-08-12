import React from 'react';
import { getStatusClass, getPriorityClass } from '@/utils/taskUtils';

export default function TaskCard({ task, onEdit, onDelete }: { task: any, onEdit: (task: any) => void, onDelete: (task: any) => void }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex justify-between items-start mb-3 gap-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2" title={task.title}>
          {task.title}
        </h3>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap border ${getStatusClass(task.status)}`}>
          {task.status}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-3">
        {task.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-5 text-xs">
        <span className={`px-2 py-1 rounded-md font-medium ${getPriorityClass(task.priority)}`}>
          Priority: {task.priority}
        </span>
        <span className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-md flex items-center font-medium">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
      
      <div className="flex justify-end gap-2 mt-auto pt-4 border-t border-gray-100">
        <button 
          onClick={() => onEdit(task)}
          className="text-sm px-3 py-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(task)}
          className="text-sm px-3 py-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
