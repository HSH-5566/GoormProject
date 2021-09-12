const numbers1 = [...Array(20).keys()]
//0~19까지의 숫자 배열 생성 (20개) ~> keys()
//... === 스프레드 연산자 ~> 배열, 오브젝트 내부의 값을 꺼냄

console.time("1")
const numbers1_1 = [...Array(20).keys()].map((i) => i + 1)
//0~19까지의 배열을 꺼내와서 1씩 더하여 새로운 변수생성
//map은 배열에서만 사용가능
//=> === 에로우 함수 .map((i) => i + 1) or .map((i) => {return i + 1})
console.timeEnd("1")

console.time("2")
const numbers2 = Array.from({length:20}, (_, i) => i + 1)
//_ ===사용하지 않을 변수 표시
console.timeEnd("2")
