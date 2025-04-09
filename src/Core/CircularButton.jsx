import { Link } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/20/solid'

export default function CircularButton({ path }) {
  return (
    <Link
      to={path}
      className="inline-flex items-center justify-center rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <PlusIcon aria-hidden="true" className="size-5" />
    </Link>
  )
}
