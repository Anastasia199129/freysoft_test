import { CARD_FOCUS, CALENDAR_FOCUS, SELECT_YEAR, SELECT_DATA } from './types'

export const selectYear = (year: string) => ({
  type: SELECT_YEAR,
  payload: year,
})

export const focusOnCard = () => ({
  type: CARD_FOCUS,
  payload: { card: true, calendar: false },
})

export const focusOnCalendar = () => ({
  type: CALENDAR_FOCUS,
  payload: { card: false, calendar: true },
})

export const selectDataByYear = (year: string) => ({
  type: SELECT_DATA,
  payload: year,
})
