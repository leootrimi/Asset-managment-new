import { Link } from 'react-router-dom'

export default function RoundedButton({ path, text, icon: Icon }) {
  return (
    <Link
      to={path}
      className="rounded-full max-w-xs flex items-center space-x-2 w-xs justify-center bg-indigo-600 py-2.5  text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
      {Icon && <Icon aria-hidden="true" className="size-5" />}
      <h6>{text}</h6>
    </Link>
  )
}
