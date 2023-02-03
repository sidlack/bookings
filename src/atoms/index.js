import { atom } from "recoil";

export const bookingsState = atom({
  key: 'bookingsState',
  default: []
})

export const flightsState = atom({
  key: 'flightsState',
  default: []
})

export const hotelsState = atom({
  key: 'hotelsState',
  default: []
})

export const userState = atom({
  key: 'userState',
  default: {}
})
