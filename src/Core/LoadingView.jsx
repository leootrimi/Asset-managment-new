import React from "react";

export default function LoadingView() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-blue-500"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
