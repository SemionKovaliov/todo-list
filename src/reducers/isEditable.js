const isEditable = (state=false, action) => {
	switch(action.type) {
		case 'TODOLIST_ON_EDIT':
			return !action.editable;
		default:
			return state;
	}
}

export default isEditable;