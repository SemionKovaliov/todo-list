import inputValue from './inputValue';
import todoList from './todoList';
import { combineReducers } from 'redux';
import isEditable from './isEditable';

const globalActions = combineReducers( { inputValue, todoList, isEditable } );

export default globalActions;