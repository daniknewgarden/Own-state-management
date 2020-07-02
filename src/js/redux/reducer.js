import { INCREMENT, DECREMENT } from './types'

export function rootReducer(state, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === 'THEME') {
    document.body.classList.add('theme-in-transition')
    document.body.classList.toggle('dark');
    window.setTimeout(function() {
    document.body.classList.remove('theme-in-transition')
  }, 1000)
  }

  return state;
}
