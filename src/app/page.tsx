export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
        
        {/* Placeholder for future "Create Task" button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
          Add New Task
        </button>
      </div>

      {/* Placeholders for future Filter and Search components */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Search tasks..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled
          />
        </div>
        <div className="w-full sm:w-48">
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            disabled
          >
            <option>All Statuses</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>

      {/* Placeholder for Task List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center text-gray-500">
        <p>No tasks yet. Create one to get started!</p>
        <p className="text-sm mt-2">(Task functionality will be implemented in the next step)</p>
      </div>
    </div>
  );
}
