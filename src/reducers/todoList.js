const todo = (state={}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false,
				editable: false
			}
		case 'TOGGLE_TODO': 	
			if(state.id !== action.id)
				return state;

			return Object.assign({}, state, {completed: !state.completed});
		case 'TODOLIST_ON_EDIT':
			if(state.id !== action.id)
				return state;

			return Object.assign({}, state, {editable: !state.editable});
		case 'EDIT_TODO':
			if(state.id !== action.id)
				return state;

			return Object.assign({}, state, {text: action.value});
		default:
			return state;
	}
}

const todoList = (state=[], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		case 'TODOLIST_ON_EDIT':
			return state.map(t => todo(t, action));
		case 'EDIT_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
}

export default todoList;