import React, {useState} from 'react';

const StateExample = (props) => {
	const initCount = 0;
	const [count, setCount] = useState(initCount);
	
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
	
	const initClick = () => {
		setCount(initCount);
	}
	
	return (
		<>
			<h2>time is {count}</h2>
			<button onClick = {plusClick}> + </button>
			<button onClick = {minusClick}> - </button>
			<button onClick = {squareClick}> ** </button>
			<button onClick = {initClick}> 0 </button>
		</>
	);
};

export default StateExample;