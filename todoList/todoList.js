const TextElement = document.querySelector('input[name=title]');
const SelectElement = document.querySelector('select[name=priority]');
const ButtonElement = document.querySelector('button[name=save]');
const ClearButtonElement = document.querySelector('button[name=clear]');

const TableTodo = document.getElementById('table_todo');
const TableTodoing = document.getElementById('table_doing');
const TableDone = document.getElementById('table_done');

const LOCALSTORAGE_ID = 'example';
const TYPES = ['todo', 'doing', 'done'];
const PRIORITY = Object.freeze({
	normal : '일반',
	high : '높음',
	low : '낮음',
});
let initData = {};

const isEmpty = str => !str || !str.trim();
const createDataId = (date = new Date()) => `${date.getTime()}_${Math.random().toString(36).substring(2, 7)}`;
const nextStepIndex = (str) => {
	const current = TYPES.findIndex(type => type === str)
	const next = current + 1;
	return next < 3 ? next : 2;
}

function reset(){
	TextElement.value = '';
	SelectElement.value = 'normal';
};

function getDB(){
	const strJSON = window.localStorage.getItem(LOCALSTORAGE_ID);
	return JSON.parse(strJSON);
}

function saveTask(dataId, type, priority, contents, date) {
	initData = {
		...initData,
		[dataId]: { type, priority, contents, date}
	};
	window.localStorage.setItem(LOCALSTORAGE_ID, JSON.stringify(initData));
	return true;
}

function checkBoxClick(e){
	const dataId = e.target.dataset.item;
	const dataSet = initData[dataId];
	if(!dataSet){
		window.alert('localStorage에 저장되어 있는 id가 아닙니다.');
		return false;
	}
	const nextIndex = nextStepIndex(dataSet.type);
	initData[dataId] = {
		...dataSet,
		type: TYPES[nextIndex],
	}
	window.localStorage.setItem(LOCALSTORAGE_ID, JSON.stringify(initData));
	
	const targetTr = document.querySelector('tr[data-id=`${dataId}`]');
	targetTr.remove();
	createBlock(
		dataId,
		initData[dataId].type,
		initData[dataId].priority,
		initData[dataId].contents,
		initData[dataId].date
	);
	return true;
}

function createBlock(dataId, type, priority, contents, date){
	const tr = document.createElement('tr');
	tr.dataset.id = dataId;
	const td1 = document.createElement('td');
	const checkBoxElement = document.createElement('input');
	checkBoxElement.type = 'checkbox';
	checkBoxElement.dataset.item = dataId;
	if(TYPES[TYPES.length - 1] !== type){
		checkBoxElement.addEventListener('click', checkBoxClick)
	}else{
		checkBoxElement.disabled = true;
	}
	td1.appendChild(checkBoxElement);
	
	const td2 = document.createElement('td');
	td2.innerText = PRIORITY[priority];
	const td3 = document.createElement('td');
	td3.innerText = contents;
	const td4 = document.createElement('td');
	td4.innerText = new Date(date).toLocaleString('ko-KR');
	
	[td1, td2, td3, td4].forEach((element) => {
		tr.appendChild(element);
	});
	
	const table = document.getElementById(`table_${type}`);
	if(!table){
		return false;
	}
	table.children[1].appendChild(tr);
	return true;
}

function addTask(priority, contents){
	const date = new Date();
	const dataId = createDataId(date);
	const args = [dataId, 'todo', priority, contents, date];
	if(saveTask.apply(null, args)){
		createBlock.apply(null, args);
	};
}

ButtonElement.addEventListener('click', () => {
	const contents = TextElement.value;
	const priorty = SelectElement.value;
	if(isEmpty(contents)){
		window.alert('내용이 들어가야 합니다!');
		return;
	}
	addTask(priorty, contents);
	reset();
});

ClearButtonElement.addEventListener('click', () => {
	window.localStorage.removeItem(LOCALSTORAGE_ID);
	window.alert('localStorage에 있는 데이터를 전부 지웠습니다.');
	window.location.reload();
})

window.onload = () => {
	initData = {
		...initData,
		...getDB(),
	}
		
	Object.keys(initData).forEach(dataId => createBlock(
		dataId,
		initData[dataId].type,
		initData[dataId].priorty,
		initData[dataId].contents,
		initData[dataId].date
	))
}