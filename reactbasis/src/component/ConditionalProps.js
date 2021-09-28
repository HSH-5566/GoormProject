import React from 'react';

const ConditionalProps = (props) => {
	return (<>
			<h1>bool 사용법</h1>
			{/*props.isVip ? <span>HI thank VIP</span> : null*/}
			{props.isVip && <span>HI thank VIP</span>}
			<p>My name is {props.name}</p>
			<p>I am {props.age} yea</p>
		</>);
};

export default ConditionalProps;