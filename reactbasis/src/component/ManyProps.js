import React from 'react';

const ManyProps = ({name, age, ...props}) => {
	return (
		<>
			<h1>여러 프롭스 사용법</h1>
			<p>My name is {name}</p>
			<p>I am {age} years old</p>
			<p>My job is {props.job}</p>	
		</>
	);
};

export default ManyProps;