const inputValue = (state={}, action) => {
	switch(action.type) {
		case 'ONCHANGE_INPUT':
			return Object.assign({}, state, {input: action.value});
		case 'ONCHANGE_EDIT_FORM':
			return Object.assign({}, state, {edit: action.value});
		default:
			return state;
	}
}

export default inputValue;