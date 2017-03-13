import React, {PropTypes} from 'react' ;
import { toggleTodo, editTodo, onChangeEditForm, newTodo } from '../actions/index';
import { connect } from 'react-redux';
import Input from 'react-widgets/lib/Input';

let Todo = ( {id, text, newText, completed, editable, isEditable, dispatch} ) => {

	if(isEditable && editable)
		return (
			<div>
				<Input value={newText} onChange={(e) => dispatch(onChangeEditForm(e.target.value))} />
				<button onClick={() => {dispatch(editTodo(id, isEditable)); dispatch(newTodo(id, newText))}}>edit</button>
			</div>
		)
	else
		return (
			<div style={{ 
					pointerEvents: isEditable ? 'none' : '',
					opacity: isEditable ? '0.5' : '1',
					textDecoration: completed ? 'line-through' : 'none',
					marginLeft: '10px',
					width: '200px' }} >

				<input style={{ marginRight: '8px' }}
					type="checkbox"
					onClick={() => dispatch(toggleTodo(id))} />

				<a href='#'style={{ 
						pointerEvents: completed ? 'none' : '',
						opacity: completed ? '0.5' : '1'}}
					onClick={(e) => {
						dispatch(editTodo(id, isEditable));
						dispatch(onChangeEditForm(text)) }}>
					{text}
				</a>
			</div>
		)
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	editable: PropTypes.bool
}

const mapStateToProps = (state) => {
	return {
		isEditable: state.isEditable,
		newText: state.inputValue.edit
	}
}

Todo = connect(mapStateToProps)(Todo);

export default Todo;