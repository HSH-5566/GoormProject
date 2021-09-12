const textarea = document.getElementById('text');
const changeWord = document.getElementById('changed-word');
const targetWord = document.getElementById('target-word');
const submit = document.getElementById('submit');
const result = document.getElementById('new-text');

function changeText(text, word, newWord){
	const changedText = text.replaceAll(word, newWord);
	return changedText;
}

function changeText2(text, word, newWord){
	const words = text.split(" ");
	//람다함수 "배열내장함수"
	const changedWords = words.map(_word =>{
		return _word === word ? newWord : _word;
	})
	const changeText = changedWords.join(" ");
	return changeText;
}

const onClickSubmit = (e) => {
	const text = textarea.value;
	const word = targetWord.value;
	const newWord = changeWord.value;
	
	result.value = changeText(text, word, newWord);
}

submit.addEventListener('click', onClickSubmit);