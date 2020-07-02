//Main js file
import {createStore} from './createStore';
import {rootReducer} from "./redux/reducer";
import { increment, decrement } from './redux/actions';
import { applyMiddleware } from 'redux';

const body = document.body,
      addBtn = document.querySelector('.add'),
      removeBtn = document.querySelector('.remove'),
      asyncBtn = document.querySelector('.async'),
      themeBtn = document.querySelector('.change-theme'),
      counter = document.querySelector('.counter');

//State
let countState = 0;

//Store
const store = createStore(rootReducer, 0);

//Add count
addBtn.addEventListener('click', function () {
  store.dispatch(increment())
})

//Remove count
removeBtn.addEventListener('click', function () {
  store.dispatch(decrement())
})

//Async count
asyncBtn.addEventListener('click', function () {
  console.log('My REDUX is not supported async events');
})

//Theme switch
themeBtn.addEventListener('click', function () {
  store.dispatch({type: 'THEME'})
})

store.subscribe( () => {
  const state = store.getState();

  counter.textContent = state;
})

//Type __INIT__APPLICATION is not defined and state will = 0
store.dispatch({type: '__INIT__APPLICATION'})
