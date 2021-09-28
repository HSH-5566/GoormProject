import React from 'react';

const BasicProps = (props) => {
	return (
		<>
			<h1>기본 사용법</h1>
			<p>My name is {props.name}</p>
			<p>I am {props.age} year</p>		
		</>
	);
};

export default BasicProps;