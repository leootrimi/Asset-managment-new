import { DocumentTextIcon } from "@heroicons/react/24/outline";
const people = [
    { name: 'Lindsay Walton', uploadedBy: 'Leotrim Halimi', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', uploadedBy: 'Test test', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', uploadedBy: 'John doe', email: 'lindsay.walton@example.com', role: 'Member' },
]

export default function FilesTableView() {
    return (
        <div>
            <div className="flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Uploaded By
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Download</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.email}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                <div className="flex space-x-2 items-center">
                                                    <div className="p-1 bg-gray-100 rounded-sm">
                                                    <DocumentTextIcon className="size-5" />
                                                    </div>
                                                    <h6>{person.name}</h6>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.uploadedBy}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit<span className="sr-only">, {person.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
