export default function SearchField() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="search" className="text-sm font-medium text-gray-900">
                Quick search
            </label>
            <input
                id="search"
                name="search"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
            />
        </div>
    )
}
