import { Droppable } from '@hello-pangea/dnd';
import RequestCard from './RequestCard';

export default function Column({ title, items, columnId, onEditClick }) {
  return (
    <div className="flex-1 rounded-lg bg-gray-50 p-4 backdrop-blur-sm bg-opacity-80">
      <h2 className="mb-4 text-base font-semibold text-gray-900">{title}</h2>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[400px] rounded-md transition-all duration-200 ${
              snapshot.isDraggingOver ? 'bg-indigo-100' : ''
            }`}
          >
            {items.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">No requests</p>
            )}
            {items.map((request, index) => (
              <RequestCard
                key={request.id}
                request={request}
                index={index}
                columnId={columnId}
                onEditClick={onEditClick} // Pass onEditClick to RequestCard
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}