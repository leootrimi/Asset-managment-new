import { useState, useEffect } from 'react';

export default function TimeSinceCheckin({ checkInTime, canCheckIn }) {
    const [elapsedTime, setElapsedTime] = useState({ hours: 0, minutes: 0 });

    useEffect(() => {
        if (!checkInTime) return;
        
        const parseCheckInTime = (timeStr) => {
            // Expect timeStr in "HH:mm" format, e.g., "14:43"
            const [hours, minutes] = timeStr.split(':').map(Number);
            const now = new Date();
            // Set to current date with provided hours and minutes
            const checkIn = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
            // If time is in the future (e.g., check-in at 14:43 but current time is 14:30), assume previous day
            if (checkIn > now) {
                checkIn.setDate(checkIn.getDate() - 1);
            }
            return checkIn;
        };

        const updateElapsedTime = () => {
            const now = new Date();
            const checkIn = parseCheckInTime(checkInTime);
            const diffMs = now - checkIn;
            
            const hours = Math.floor(diffMs / (1000 * 60 * 60));
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            
            // Only update if time difference is non-negative
            if (diffMs >= 0) {
                setElapsedTime({ hours, minutes });
            }
        };

        // Update immediately
        updateElapsedTime();
        
        // Update every minute
        const interval = setInterval(updateElapsedTime, 60000);
        
        return () => clearInterval(interval);
    }, [checkInTime]);

    // If canCheckIn is true, return null to not show time
    if (canCheckIn) {
        return null;
    }

    return (
        checkInTime ? (
            <h1 className="text-3xl text-gray-800 font-semibold">
                {String(elapsedTime.hours).padStart(2, '0')}
                <span className="text-sm">h</span>{' '}
                {String(elapsedTime.minutes).padStart(2, '0')}
                <span className="text-sm">min</span>
            </h1>
        ) : null
    );
}