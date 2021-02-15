import { combineReducers } from 'redux'; 
import todos from '../todos/todos';
import visibilityFilter from '../visibilityFilter/visibilityFilter'

const todoApp = combineReducers({ todos, visibilityFilter });

export default todoApp;