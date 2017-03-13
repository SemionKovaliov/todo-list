import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

let TodoList = ( {todoList} ) => {
	return (
		<div style={{ marginBottom: '5px' }}>
		{ todoList.map(t => <Todo key={t.id} id={t.id} text={t.text} completed={t.completed} editable={t.editable} />) }
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todoList.sort(t => t.completed)
	}
}

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList;