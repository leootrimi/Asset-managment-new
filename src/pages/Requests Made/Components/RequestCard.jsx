import { Draggable } from '@hello-pangea/dnd';
import { PencilIcon } from '@heroicons/react/24/solid';

export default function RequestCard({ request, index, columnId, onEditClick }) {
  const buttonStyles = {
    waiting: 'bg-gray-400 hover:bg-gray-300',
    inProgress: 'bg-yellow-400 hover:bg-yellow-300',
    approved: 'bg-green-400 hover:bg-green-300',
    rejected: 'bg-red-400 hover:bg-red-300',
  };

  const buttonClass = buttonStyles[columnId] || 'bg-indigo-600 hover:bg-indigo-500';

  return (
    <Draggable draggableId={request.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-3 rounded-md bg-white p-4 shadow-sm ring-1 ring-gray-300 hover:ring-indigo-300 transition-all duration-200 ${
            snapshot.isDragging ? 'bg-indigo-50 shadow-md' : ''
          }`}
          style={{
            ...provided.draggableProps.style,
            userSelect: 'none',
          }}
          onClick={() => onEditClick(request, columnId)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">{request.equipment}</h3>
            <button
              type="button"
              className={`rounded-xl p-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${buttonClass}`}
              onClick={() => onEditClick(request, columnId)}
            >
              <PencilIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-600">ID: {request.id}</p>
          <p className="mt-1 text-xs text-gray-600">Requested By: {request.requestedBy}</p>
          <p className="mt-1 text-xs text-gray-600">Date: {request.date}</p>
        </div>
      )}
    </Draggable>
  );
}