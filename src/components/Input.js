import React from 'react';
import Input from 'react-widgets/lib/Input';
import { onChangeInput } from '../actions/index';
import { connect } from 'react-redux';

let InputComponent = ( {value, onChange, dispatch} ) => {
	return <Input value={value} onChange={ (e) => dispatch(onChangeInput(e.target.value)) } />
}

const mapStateToProps = (state) => {
	return {
		value: state.inputValue.input
	}
}

InputComponent = connect(mapStateToProps)(InputComponent);

export default InputComponent;