"use client"

import { useState } from "react"
import Card from "./Card"

export default function TasksCard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete quarterly report", completed: false },
    { id: 2, text: "Review team performance", completed: false },
    { id: 3, text: "Schedule team building event", completed: true },
    { id: 4, text: "Update department budget", completed: false },
  ])

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length

  return (
    <Card
      title="Tasks"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      }
    >
      <div className="flex flex-col items-center py-2">
        <div className="flex items-center mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 mr-2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span className="text-4xl font-bold text-blue-600">
            {completedTasks}/{totalTasks}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">tasks completed</p>

        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Your Tasks</h4>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className={`ml-3 text-sm ${task.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <line x1="12" x2="12" y1="5" y2="19" />
                <line x1="5" x2="19" y1="12" y2="12" />
              </svg>
              Add new task
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
