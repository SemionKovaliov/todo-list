import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import newTodoText from './reducers/newTodoText'
import globalActions from './reducers/index'
import App from './components/App'

let store = createStore(globalActions);
console.log(store.getState())

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)

// import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const textField = (state = {}, action) => {
// 	switch(action.type) {
// 		case 'CHANGE_TEXT':
// 			return Object.assign({}, state, {text: action.text});
// 		case 'CHANGE_COLOR':
// 			return Object.assign({}, state, {clicked: !action.clicked});
// 		default:
// 			return state;
// 	}
// }

// const changeText = (text) => {
// 	return {
// 		type: 'CHANGE_TEXT',
// 		text
// 	}
// }

// const changeTextColor = (clicked) => {
// 	return {
// 		type: 'CHANGE_COLOR',
// 		clicked
// 	}
// }

// let store = createStore(textField);

// let Text = ( {text, clicked, dispatch} ) => {
// 	return <h2 
// 		style={{color: clicked ? 'red' : 'black'}} 
// 		onClick={() => dispatch(changeTextColor(clicked))}>
// 		{
// 			text
// 		}
// 	</h2>
// }

// Text.propTypes = {
// 	text: PropTypes.string,
// 	clicked: PropTypes.bool
// }

// const mapStateToProps = (state) => {
// 	return {
// 		text: state.text,
// 		clicked: state.clicked
// 	}
// }

// let App = ( {dispatch} ) => {
// 	return (
// 		<div>
// 			<input onChange={(e) => dispatch(changeText(e.target.value))} />
// 			<Text />
// 		</div>
// 	)
// }

// Text = connect(mapStateToProps)(Text);

// App = connect()(App);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('test')
// );