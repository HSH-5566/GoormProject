import React from 'react';

const DefalutProps = ({name, age, job="백수"}) => {
	return (
		<>
			<h1>여러 프롭스 사용법</h1>
			<p>My name is {name}</p>
			<p>I am {age} years old</p>
			<p>My job is {job}</p>	
		</>
	);
};

export default DefalutProps;

DefalutProps.defaultProps = {
	name : '이름없음',
	age : '나이없음',
	job : '직업없음'
}