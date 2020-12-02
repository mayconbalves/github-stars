export const SHOW_SPINNER = 'SHOW_SPINNER'
export const HIDE_SPINNER = 'HIDE_SPINNER'

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER
  }
}

export const hideSpinner = () => {
  return {
    type: HIDE_SPINNER
  }
}
