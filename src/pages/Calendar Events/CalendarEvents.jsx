import { useEffect, useRef, useState } from 'react'
import { apiRequest } from '../../services/ApiCalls'

export default function CalendarEvents() {
    const container = useRef(null)
    const containerNav = useRef(null)
    const containerOffset = useRef(null)
    const [events, setEvents] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newEvent, setNewEvent] = useState({
        title: '',
        startTime: '09:00',
        endTime: '10:00',
        date: new Date().toISOString().split('T')[0],
        description: ''
    })

    // Get current date information
    const today = new Date()
    const currentMonth = today.toLocaleString('default', { month: 'long' })
    const currentYear = today.getFullYear()
    
    // Calculate start of current week (Monday)
    const startOfWeek = new Date(today)
    const dayOfWeek = today.getDay()
    const diff = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek)
    startOfWeek.setDate(today.getDate() + diff)

    // Generate dates for the week
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek)
        date.setDate(startOfWeek.getDate() + i)
        return date
    })

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await apiRequest({ endpoint: '/calendar'})
                const data = response
                setEvents(data)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }
        fetchEvents()
    }, [])

    useEffect(() => {
        const startHour = 9
        const endHour = 18
        const totalMinutes = (endHour - startHour) * 60
        const currentMinute = new Date().getHours() * 60 + new Date().getMinutes() - startHour * 60

        if (currentMinute >= 0 && currentMinute <= totalMinutes) {
            container.current.scrollTop =
                ((container.current.scrollHeight - containerNav.current.offsetHeight - containerOffset.current.offsetHeight) *
                    currentMinute) /
                totalMinutes
        }
    }, [])

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewEvent((prev) => ({ ...prev, [name]: value }))
    }

    // Handle form submission to save event
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await apiRequest({endpoint: '/calendar', method: 'POST', body: newEvent})
            const savedEvent = response
            setEvents((prev) => [...prev, savedEvent])
            setNewEvent({ 
                title: '', 
                startTime: '09:00', 
                endTime: '10:00', 
                date: new Date().toISOString().split('T')[0], 
                description: '' 
            })
            setIsModalOpen(false)
        } catch (error) {
            console.error('Error saving event:', error)
        }
    }

    // Calculate grid row for an event
    const getGridRow = (startTime, endTime, date) => {
        const start = new Date(`${date}T${startTime}`)
        const end = new Date(`${date}T${endTime}`)
        const startMinutes = (start.getHours() + start.getMinutes() / 60) - 9 // Hours since 9 AM
        const endMinutes = (end.getHours() + end.getMinutes() / 60) - 9
        const rowsPerHour = 12 // Match original: 1 hour = 12 rows
        const startRow = Math.floor(startMinutes * rowsPerHour) + 1
        const span = Math.floor((endMinutes - startMinutes) * rowsPerHour)
        return `${startRow} / span ${span}`
    }

    // Map date to column
    const getColumn = (date) => {
        const eventDate = new Date(date)
        eventDate.setHours(0, 0, 0, 0)
        const weekStart = new Date(weekDates[0])
        weekStart.setHours(0, 0, 0, 0)
        const diffDays = Math.round((eventDate - weekStart) / (1000 * 60 * 60 * 24))
        if (diffDays >= 0 && diffDays < 7) {
            return diffDays + 1 // col-start-1 for Monday
        }
        return null // Event outside current week won't be displayed
    }

    return (
        <div className="flex h-full flex-col">
            <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
                <h1 className="text-base font-semibold text-gray-900">
                    <time dateTime={`${currentYear}-${today.getMonth() + 1}`}>{currentMonth} {currentYear}</time>
                </h1>
                <div className="flex items-center">
                    <div className="relative flex items-center rounded-md md:items-stretch">
                        <button
                            type="button"
                            className="hidden text-sm font-semibold text-gray-900 focus:relative md:block"
                        >
                            Today
                        </button>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        <div className="ml-6 h-6 w-px bg-gray-300" />
                        <button
                            type="button"
                            className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add event
                        </button>
                    </div>
                </div>
            </header>

            {/* Modal for adding events */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-900">Add New Event</h2>
                        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={newEvent.title}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={newEvent.date}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    name="startTime"
                                    id="startTime"
                                    value={newEvent.startTime}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    name="endTime"
                                    id="endTime"
                                    value={newEvent.endTime}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    value={newEvent.description}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div ref={container} className="isolate flex flex-auto flex-col overflow-auto bg-white">
                <div style={{ width: '165%' }} className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
                    <div ref={containerNav} className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black/5 sm:pr-8">
                        <div className="grid grid-cols-7 text-sm/6 text-gray-500 sm:hidden">
                            {weekDates.map((date, index) => (
                                <button key={index} type="button" className="flex flex-col items-center pb-3 pt-2">
                                    {date.toLocaleString('default', { weekday: 'short' }).charAt(0)}{' '}
                                    <span
                                        className={`mt-1 flex size-8 items-center justify-center font-semibold ${
                                            date.toDateString() === today.toDateString()
                                                ? 'rounded-full bg-indigo-600 text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {date.getDate()}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid">
                            <div className="col-end-1 w-14" />
                            {weekDates.map((date, index) => (
                                <div key={index} className="flex items-center justify-center py-3">
                                    <span
                                        className={
                                            date.toDateString() === today.toDateString() ? 'flex items-baseline' : ''
                                        }
                                    >
                                        {date.toLocaleString('default', { weekday: 'short' })}{' '}
                                        <span
                                            className={`items-center justify-center font-semibold ${
                                                date.toDateString() === today.toDateString()
                                                    ? 'ml-1.5 flex size-8 rounded-full bg-indigo-600 text-white'
                                                    : 'text-gray-900'
                                            }`}
                                        >
                                            {date.getDate()}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-auto">
                        <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
                        <div className="grid flex-auto grid-cols-1 grid-rows-1">
                            <div
                                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                                style={{ gridTemplateRows: 'repeat(18, minmax(3.5rem, 1fr))' }}
                            >
                                <div ref={containerOffset} className="row-end-1 h-7"></div>
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        9AM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        10AM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        11AM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        12PM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        1PM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        2PM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        3PM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        4PM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        5PM
                                    </div>
                                </div>
                                <div />
                                <div>
                                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                        6PM
                                    </div>
                                </div>
                                <div />
                            </div>
                            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                                <div className="col-start-1 row-span-full" />
                                <div className="col-start-2 row-span-full" />
                                <div className="col-start-3 row-span-full" />
                                <div className="col-start-4 row-span-full" />
                                <div className="col-start-5 row-span-full" />
                                <div className="col-start-6 row-span-full" />
                                <div className="col-start-7 row-span-full" />
                                <div className="col-start-8 row-span-full w-8" />
                            </div>
                            <ol
                                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                                style={{ gridTemplateRows: '1.75rem repeat(108, minmax(0, 1fr)) auto' }}
                            >
                                {events.map((event) => {
                                    const column = getColumn(event.date)
                                    if (!column) return null // Skip events outside current week
                                    return (
                                        <li
                                            key={event._id}
                                            className={`relative mt-px flex sm:col-start-${column}`}
                                            style={{ gridRow: getGridRow(event.startTime, event.endTime, event.date) }}
                                        >
                                            <a
                                                href="#"
                                                className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100"
                                            >
                                                <p className="order-1 font-semibold text-blue-700">{event.title}</p>
                                                <p className="text-blue-500 group-hover:text-blue-700">
                                                    <time dateTime={`${event.date}T${event.startTime}`}>
                                                        {new Date(`${event.date}T${event.startTime}`).toLocaleTimeString([], {
                                                            hour: 'numeric',
                                                            minute: '2-digit'
                                                        })}
                                                    </time>
                                                </p>
                                                {event.description && <p className="text-blue-500">{event.description}</p>}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}