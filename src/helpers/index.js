import dayjs from "dayjs"
require("dayjs/locale/ar");
export const handleRemoveSpace = (str) => str.replace(/\s/g, "").toUpperCase()
export const handleAddAsterisks = (text, number = 3) => {
  return `${text.substr(0, number)}${new Array(text.length - number).join("*")}`
}

let currentLang = localStorage.getItem('lang') || 'ar';

export const getDateFormat = (date, format = 'MM/DD/YYYY') => dayjs(date)
  .locale(currentLang)
  .format(format);
   
/* eslint-disable no-useless-escape */
export const urlRegex = new RegExp(
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
)

export const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
)

export const handleStringStartsWith = (string) => {
  if (string && string.startsWith("-")) {
    return true
  }
  return false
}

export const handleMissingImage = (character, start = 0, end = 2) => {
  if (character) {
    return character.substr(start, end).toUpperCase()
  }
}
