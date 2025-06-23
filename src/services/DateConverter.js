
//2025-07-01T00:00:00.000Z - To - "1 July"
export function formatToDayMonth(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });
}
