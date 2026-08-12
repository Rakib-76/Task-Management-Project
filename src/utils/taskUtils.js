/**
 * Generates a simple unique ID for a task
 */
export function createTaskId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * Returns Tailwind CSS classes based on the task status
 */
export function getStatusClass(status) {
  switch (status) {
    case 'To Do':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'In Progress':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'Done':
      return 'bg-green-50 text-green-700 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

/**
 * Returns Tailwind CSS classes based on the task priority
 */
export function getPriorityClass(priority) {
  switch (priority) {
    case 'Low':
      return 'bg-gray-100 text-gray-700';
    case 'Medium':
      return 'bg-yellow-50 text-yellow-700';
    case 'High':
      return 'bg-red-50 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}
