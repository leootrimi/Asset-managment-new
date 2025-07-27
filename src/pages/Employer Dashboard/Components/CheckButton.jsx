"use client"

import { useState } from "react"

export default function CheckButton() {
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const handleCheck = () => {
    setIsCheckedIn(!isCheckedIn)
    const timestamp = new Date().toLocaleTimeString()
  }

  return (
    <button
      onClick={handleCheck}
      className={`px-5 py-2.5 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
        isCheckedIn
          ? "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500"
          : "bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-500"
      }`}
    >
      {isCheckedIn ? "Check Out" : "Check In"}
    </button>
  )
}
