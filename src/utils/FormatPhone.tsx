export default function FormatPhone(phone: string) {
  const ddi = phone.substring(0, 2);
  const ddd = phone.substring(2, 4);
  const firstNumbers = phone.substring(4, 9);
  const lastNumbers = phone.substring(9);
  const formattedPhone = `+${ddi} (${ddd}) ${firstNumbers}-${lastNumbers}`;
  return formattedPhone;
}
