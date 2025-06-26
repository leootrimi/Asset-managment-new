import { time } from "framer-motion";

//2025-07-01T00:00:00.000Z - To - "1 July"
export function formatToDayMonth(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });
}


export const getWorkDurations = (timeline) => {
    
    if (!timeline || timeline.length === 0) return { totalHours: 0, averageHours: 0 };

    let totalMinutes = 0;
    let validEntries = 0;
    
    timeline.forEach(item => {
        if (item.checkinTime && item.checkoutTime && item.checkinDate) {
            const checkIn = new Date(`${item.checkinDate}T${item.checkinTime}`);
            const checkOut = new Date(`${item.checkinDate}T${item.checkoutTime}`);

            if (!isNaN(checkIn) && !isNaN(checkOut) && checkOut > checkIn) {
                const diffMs = checkOut - checkIn;
                totalMinutes += diffMs / (1000 * 60);
                validEntries += 1;
            }
        }
    });

    const totalHours = totalMinutes / 60;
    const averageHours = validEntries > 0 ? totalHours / validEntries : 0;

    return { totalHours: totalHours.toFixed(2), averageHours: averageHours.toFixed(2) };
};
