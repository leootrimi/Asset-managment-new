const EmployersSkeleton = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-wrap items-center gap-4 border p-4 rounded-xl">
        <div className="flex-1">
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
        </div>
        <div className="w-48">
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
      </div>

      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-40" />
              </div>
            </div>
            <div className="text-right">
              <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployersSkeleton;
