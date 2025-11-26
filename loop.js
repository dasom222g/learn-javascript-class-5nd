// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"]; // 배열

// console.log("1번째 데이터", ingredients[0]);
// console.log("2번째 데이터", ingredients[1]);
// console.log("3번째 데이터", ingredients[2]);
// console.log("4번째 데이터", ingredients[3]);

// 반복문
ingredients.forEach((value, index) => {
  // n번 실행
  console.log(`${index}번째 데이터: ${value}`);
});

const messages = [
  {
    username: "맛있는 쉐프",
    message: "대화를 시작해볼까요?",
  },
  {
    username: "후츠릿",
    message: "그래. 너는 이름이 뭐야?",
  },
];

messages.forEach((item) => {
  // 반복 실행 구문
  // item: 객체
  console.log(item.message);
});

const names = ["alice", "bob", "kelly", "david"];

// let upperNames = [];

// names.forEach((name) => {
//   const result = name.toUpperCase();
//   upperNames = [...upperNames, result];
// });

const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

const filterNames = names.filter((name) => name.length >= 4);
console.log("🚀 ~ filterNames:", filterNames);

const findName = names.find((name) => name[0] === "k");
console.log("🚀 ~ findName:", findName);

// some: 배열의 요소 중 하나라도 조건을 만족하면 true, 그렇지 않으면 false
const someName = names.some((name) => name.length >= 4); // true
console.log("🚀 ~ someName:", someName);

// every: 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false
const everyName = names.every((name) => name.length >= 4); // false
console.log("🚀 ~ everyName:", everyName);

// 문제 1
// function add(a, b) {
// 	return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => a + b;

console.log(add(5, 3)); // 예상 결과: 8

// 문제 7
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // 예상 결과: [2, 4, 6]
