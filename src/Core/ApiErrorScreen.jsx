const ApiErrorScreen = ({ onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md text-center p-8 bg-white shadow-xl rounded-2xl">
        <div className="text-5xl mb-4 text-red-500">🚫</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We couldn’t load the data. It might be a server issue or your internet connection.
        </p>

        <button
          onClick={onRetry}
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ApiErrorScreen;
