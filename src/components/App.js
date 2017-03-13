import React from 'react' 
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';

const App = () => {
	return (
		<div>
			<TodoList />
			<AddTodo />
		</div>
	)
}

export default App;