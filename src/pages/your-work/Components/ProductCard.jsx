export default function ProductCard() {
    return (
      <div className="w-full rounded-lg overflow-hidden shadow-md bg-white">
        {/* Yellow/orange header with wavy design */}
        <div className="relative bg-amber-400 h-32 p-4">
          {/* Three dots menu */}
          <div className="absolute top-2 right-2">
            <button className="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
  
          {/* Idea card */}
          <div className="bg-white rounded px-3 py-1 inline-flex items-center shadow-sm w-36">
            <span className="text-amber-500 mr-1">💡</span>
            <span className="font-medium text-sm">Idea</span>
            <span className="ml-2 text-gray-500">
              <svg className="w-16 h-4" viewBox="0 0 60 10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 5C10 2 15 8 25 5C35 2 40 8 50 5C60 2 65 8 75 5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>
  
          {/* Arrow */}
          <div className="relative ml-6 mt-2">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12C8 9 10 15 15 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M3 14L5 12L7 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
  
          {/* Epic card */}
          <div className="bg-white rounded px-3 py-1 inline-flex items-center shadow-sm ml-10 w-36 relative">
            <span className="text-purple-500 mr-1">⚡</span>
            <span className="font-medium text-sm">Epic</span>
            <span className="ml-2 text-gray-500">
              <svg className="w-16 h-4" viewBox="0 0 60 10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 5C10 2 15 8 25 5C35 2 40 8 50 5C60 2 65 8 75 5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
  
            {/* Sparkle decoration */}
            <div className="absolute -right-4 top-0">
              <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3L13 7M13 7H17L14 10L15 14L12 12L9 14L10 10L7 7H11L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Content section */}
        <div className="p-5">
          {/* Product title with logo */}
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Product Discovery</h3>
          </div>
  
          {/* Headline */}
          <h4 className="font-semibold text-gray-800 mb-1">Build right features, the right way</h4>
  
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
            Prioritize your ideas then easily move them into delivery, without losing any details on the way.
          </p>
  
          {/* Buttons */}
          <div className="flex space-x-3">
            <button className="bg-gray-900 text-white px-4 py-1.5 rounded text-sm font-medium">Try it now</button>
            <button className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded text-sm font-medium">Learn more</button>
          </div>
        </div>
      </div>
    )
  }
  