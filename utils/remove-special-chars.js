export default function removeSpecialChars(string, mantainSpaces = false) {
  if (!mantainSpaces) return string.replace(/[^0-9a-zA-Z+]/g, '')
  else return string.replace(/[^0-9a-zA-Z\s+]/g, '')
}
