import React from 'react';
import Button from 'react-widgets/lib/Button';
import { connect } from 'react-redux';
import { onClickAddButton } from '../actions/index';
import { onChangeInput } from '../actions/index';

let ButtonComponent = ( {onClick, text, dispatch} ) => {
	return <Button 
		onClick={ () => {
			dispatch(onClickAddButton(text)); dispatch(onChangeInput(''));
		}}
		disabled={text ? false : true} >
		Add
		</Button>
}

const mapStateToProps = (state) => {
	return {
		text: state.inputValue.input
	}
}

ButtonComponent = connect(mapStateToProps)(ButtonComponent);

export default ButtonComponent;