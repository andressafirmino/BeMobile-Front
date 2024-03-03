export default function FormatDate(admission_date: string) {
  const date = new Date(admission_date);
  const newDate = date.toISOString().split('T')[0];
  const day = newDate.substring(8);
  const month = newDate.substring(5, 7);
  const year = newDate.substring(0, 4);
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
