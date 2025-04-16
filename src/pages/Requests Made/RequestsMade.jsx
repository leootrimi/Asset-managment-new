import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './Components/Column';
import RequestModal from './Components/RequestModal';

const initialRequests = {
  waiting: [
    { id: 'req-001', equipment: 'Dell XPS 13', requestedBy: 'John Doe', date: '2025-04-10' },
    { id: 'req-002', equipment: 'Logitech Mouse', requestedBy: 'Jane Smith', date: '2025-04-12' },
  ],
  inProgress: [
    { id: 'req-003', equipment: 'Jabra Headphones', requestedBy: 'IT Dept', date: '2025-04-08' },
  ],
  approved: [
    { id: 'req-004', equipment: 'HP Monitor', requestedBy: 'Alice Brown', date: '2025-04-05' },
  ],
  rejected: [
    { id: 'req-005', equipment: 'Apple MacBook Air', requestedBy: 'Bob Wilson', date: '2025-04-11' },
  ],
};

export default function RequestsMade() {
  const [requests, setRequests] = useState(initialRequests);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) return;

    const sourceItems = [...(requests[source.droppableId] || [])];
    const destItems = source.droppableId === destination.droppableId
      ? sourceItems
      : [...(requests[destination.droppableId] || [])];

    const [movedItem] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, movedItem);

    setRequests((prev) => ({
      ...prev,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    }));
  };

  const handleEditClick = (request, columnId) => {
    setSelectedRequest({ ...request, status: columnId });
    setModalOpen(true);
    console.log(modalOpen);
  };

  const handleSaveRequest = (updatedRequest) => {
    const prevStatus = selectedRequest?.status;
    const newStatus = updatedRequest.status || prevStatus;

    if (!prevStatus || !selectedRequest) return;

    const updatedItem = {
      id: selectedRequest.id,
      equipment: updatedRequest.equipment,
      requestedBy: updatedRequest.requestedBy,
      date: updatedRequest.date,
    };

    setRequests((prev) => {
      const prevColumn = [...(prev[prevStatus] || [])];
      const index = prevColumn.findIndex((item) => item.id === selectedRequest.id);
      if (index !== -1) {
        prevColumn.splice(index, 1);
      }

      const newColumn = [...(prev[newStatus] || [])];
      newColumn.push(updatedItem);

      return {
        ...prev,
        [prevStatus]: prevColumn,
        [newStatus]: newColumn,
      };
    });
  };

  return (
    <div className="p-2 max-w-full mx-auto">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900">Equipment Requests</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage IT equipment requests by dragging them between columns.
        </p>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Column
            title="Waiting"
            items={requests.waiting || []}
            columnId="waiting"
            onEditClick={handleEditClick}
          />
          <Column
            title="In Progress"
            items={requests.inProgress || []}
            columnId="inProgress"
            onEditClick={handleEditClick}
          />
          <Column
            title="Approved"
            items={requests.approved || []}
            columnId="approved"
            onEditClick={handleEditClick}
          />
          <Column
            title="Rejected"
            items={requests.rejected || []}
            columnId="rejected"
            onEditClick={handleEditClick}
          />
        </div>
      </DragDropContext>
      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        request={selectedRequest}
        onSave={handleSaveRequest}
      />
    </div>
  );
}