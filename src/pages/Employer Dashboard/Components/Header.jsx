import CheckButton from "./CheckButton"

export default function Header({ user }) {
  return (
    <header className="bg-white shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="relative h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
          <img
            src={user.avatar || "/placeholder.svg"}
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = "none"
              e.target.parentNode.innerHTML = user.name.charAt(0)
            }}
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Hi, {user.name}</h1>
          <p className="text-sm text-gray-500">{user.position}</p>
        </div>
      </div>
      <CheckButton />
    </header>
  )
}
