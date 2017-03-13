export const onChangeInput = (value) => {
	return {
		type: 'ONCHANGE_INPUT',
		value
	}
}

export const onChangeEditForm = (value) => {
	return {
		type: 'ONCHANGE_EDIT_FORM',
		value
	}
}

let todoId = 0;
export const onClickAddButton = (text) => {
	return {
		type: 'ADD_TODO',
		id: todoId++,
		text
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const editTodo = (id, editable) => {
	return {
		type: 'TODOLIST_ON_EDIT',
		id,
		editable
	}
}

export const newTodo = (id, value) => {
	return {
		type: 'EDIT_TODO',
		id,
		value
	}
}