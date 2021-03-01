const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO' : return {
      id: action.id,
      text: action.text,
      completed: false
    }
    case 'TOGGLE_TODO' : 
      if(state.id !== action.it) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default: return state;
  }
}

const todos = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO' : return [
      ...state,
      todo(undefined, action)
    ]
    case 'TOGGLE_TODO' : return state.map(t => todo(t, action))
    default: return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER' : return action.filter
    default : return state
  }
}

const { combineReducers } = Redux;
const todoApp = combineReducers({todos, visibilityFilter});

const { createStore } = Redux;
const store = createStore(todoApp);

const {createElement, useState} = React;
const html = htm.bind(createElement);
const { Component } = React;

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      html`<div>
        <input ref=${node => {this.input = node}}/>
        <button onClick=${()=> {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          }), 
          this.input.value = ''
        }}>ADD_TODO</button>
        <ul>
          ${this.props.todos.map(todo => {
            return html`<li id=${todo.id}>${todo.text}</li>`
          })}
        </ul>
      </div>`
      
    )
  }
}

const render = () => {
  ReactDOM.render(
    html`<${TodoApp} todos=${store.getState().todos}/>`, 
    document.getElementById('root')
  )
}

store.subscribe(render);
render();