export default function dateFormate(date: string): string {
  const newDateFormate: Date = new Date(date);
  const formattedDate: string = newDateFormate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
}
