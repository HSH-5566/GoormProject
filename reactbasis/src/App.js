import logo from './logo.svg';
import './App.css';
import Hello from './component/hello.js'
import BasicProps from './component/BasicProps.js'
import ManyProps from './component/ManyProps.js'
import DefalutProps from './component/DefalutProps.js'
import ChildrenProps from './component/ChildrenProps.js'
import ConditionalProps from './component/ConditionalProps.js'
import StateExample from './component/StateExample.js'

function App() {
  return (
	  <div>
	  	<Hello />
		<StateExample />
		<BasicProps name="Hanseohyon" age="23"/>
		<ManyProps name="Hanseohyon" age="23" job="meme"/>
		<DefalutProps />
		<ChildrenProps>
			<h1>기본 사용법</h1>
			<p>My name is Hanseohyon</p>
			<p>I am 23 year</p>
		</ChildrenProps>
		<ConditionalProps name="han" age="10" isVip={false}/>
	  </div>
  );
}

export default App;
