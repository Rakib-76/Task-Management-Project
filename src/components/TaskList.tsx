import React from 'react';
import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

export default function TaskList({ 
  tasks, 
  totalTasksCount,
  onEdit, 
  onDelete 
}: { 
  tasks: any[], 
  totalTasksCount: number,
  onEdit: (task: any) => void, 
  onDelete: (task: any) => void 
}) {
  if (totalTasksCount === 0) {
    return (
      <EmptyState 
        message="No tasks yet. Create your first task." 
        description="Get started by clicking the 'Create Task' button above." 
      />
    );
  }

  if (tasks.length === 0) {
    return (
      <EmptyState 
        message="No tasks match your search or filter." 
        description="Try adjusting your criteria to find what you're looking for." 
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task: any) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
