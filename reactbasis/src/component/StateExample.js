import React, {useState} from 'react';

const StateExample = (props) => {
	const [count, setCount] = useState(0);
	
	const plusClick = () =>{
		setCount(count+1);
		//setCount((preVal)=>preVal++);
	}
	const minusClick = () => {
		setCount(count-1);
	}
	
	const squareClick = () => {
		setCount(count*count);
	}
	
	const initialClick = () => {
		setCount(0);
	}
	
	return (
		<>
			<h2>time is {count}</h2>
			<button onClick = {plusClick}> + </button>
			<button onClick = {minusClick}> - </button>
			<button onClick = {squareClick}> ** </button>
			<button onClick = {initialClick}> 0 </button>
		</>
	);
};

export default StateExample;