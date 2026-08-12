import React from 'react';
import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

export default function TaskList({ tasks }: { tasks: any[] }) {
  if (tasks.length === 0) {
    return (
      <EmptyState 
        message="No tasks found" 
        description="Try adjusting your search or filters, or create a new task to get started." 
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task: any) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
