export default function formatDate(
  date: string,
  locales: string | string[] | undefined = 'en-US',
  options: Intl.DateTimeFormatOptions | undefined = {
    dateStyle: 'full',
  }
) {
  return new Intl.DateTimeFormat(locales, options).format(new Date(date));
}
