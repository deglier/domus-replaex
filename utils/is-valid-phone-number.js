/* eslint-disable prefer-regex-literals */
import removeSpecialChars from './remove-special-chars'

export default function isValidTelephone(number) {
  if (number === '') return true
  const cleanNumber = removeSpecialChars(number)
  for (let i = 0; i <= 9; i++) {
    if (cleanNumber.substr(2) === `${i}${i}${i}${i}${i}${i}${i}${i}${i}`)
      return false
  }
  if (cleanNumber.substr(2, 1) !== '9' && cleanNumber.length > 10) return false
  const validDdd = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
    37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63,
    64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 78, 79, 81, 82, 83, 84, 85, 86,
    87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ]
  const ddd = cleanNumber.substr(0, 2)
  const regex = new RegExp(/([1-9]{2})(([9]{1}\d{4}|[2-8]{1}\d{3})\d{4})/g)

  if (
    regex.test(cleanNumber) &&
    validDdd.filter((item) => item.toString() === ddd).length !== 0
  )
    return true
  else return false
}
