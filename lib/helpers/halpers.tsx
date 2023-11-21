export default function formatNumberString(inputString: string): string {
  inputString = inputString.replace(/\s/g, '')

  const groups: RegExpMatchArray | null = inputString.match(/.{1,4}/g)

  const formattedString: string = groups ? groups.join(' ') : ''

  return formattedString
}

export function isObjectEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0;
}

export function formatMonths(months: string[]): string[] {
  return months.map(month => month.slice(0, 3).charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase());
}
