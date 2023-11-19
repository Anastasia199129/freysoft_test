export default function formatNumberString(inputString: string): string {
  inputString = inputString.replace(/\s/g, '')

  const groups: RegExpMatchArray | null = inputString.match(/.{1,4}/g)

  const formattedString: string = groups ? groups.join(' ') : ''

  return formattedString
}
