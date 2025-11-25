// 조건문
// if () {}
const score = 80;

const pass = () => {
  console.log("합격 ✅");
};

// 불합격을 출력하는 화살표 함수 (fail)
const fail = () => {
  console.log("불합격 ❌");
};

// if (score > 60) {
//   // 조건식이 true인 경우 실행할 구문
//   // 합격
//   pass();
// } else {
//   // 조건식이 false인 경우 실행할 구문
//   // 불합격
//   fail();
// }

// 삼항 연산자
score > 60 ? pass() : fail();

console.log("if문 종료");

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("D등급");
}

console.log("if문 종료");

const isCheck = "abc" === "abc";
console.log("🚀 ~ isCheck:", isCheck);

const userInput = ""; // false

if (!userInput) {
  // userInput의 값이 비어있는 경우
  console.log("값을 입력해주세요");
}

// 배열
// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"]; // 배열
console.log("2번째 데이터=>", ingredients[1]);
console.log("3번째 데이터=>", ingredients[2]);
console.log("igredients 갯수: ", ingredients.length);

const person = {
  name: "최지욱",
  mbti: "INTP",
  company: "한국도로공사",
  city: "김천",
  isMale: true,
};

console.log("0번째 데이터", person["name"]);
console.log("company: ", person.company); // 닷 표기법 권장 ⭐️

const messageInfo = {
  userImage:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/221125_%EC%B2%AD%EB%A3%A1%EC%98%81%ED%99%94%EC%83%81_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_01_%28cropped%29.jpg",
  username: "맛있는 쉐프",
  message: "안녕하세요.",
  role: "assistant",
};

const messages = [
  {
    userImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/221125_%EC%B2%AD%EB%A3%A1%EC%98%81%ED%99%94%EC%83%81_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_01_%28cropped%29.jpg",
    username: "맛있는 쉐프",
    message: "안녕하세요.",
    role: "assistant",
  },
  {
    userImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/221125_%EC%B2%AD%EB%A3%A1%EC%98%81%ED%99%94%EC%83%81_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_01_%28cropped%29.jpg",
    username: "후츠릿",
    message: "안녕. 이름이 뭐야?",
    role: "user",
  },
  {
    userImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/221125_%EC%B2%AD%EB%A3%A1%EC%98%81%ED%99%94%EC%83%81_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_01_%28cropped%29.jpg",
    username: "맛있는 쉐프",
    message: "안녕하세요.",
    role: "assistant",
  },
  {
    userImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/221125_%EC%B2%AD%EB%A3%A1%EC%98%81%ED%99%94%EC%83%81_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_01_%28cropped%29.jpg",
    username: "맛있는 쉐프",
    message: "안녕하세요.",
    role: "assistant",
  },
  {
    userImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/221125_%EC%B2%AD%EB%A3%A1%EC%98%81%ED%99%94%EC%83%81_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_01_%28cropped%29.jpg",
    username: "맛있는 쉐프",
    message: "안녕하세요.",
    role: "assistant",
  },
];
console.log("🚀 ~ messages", messages.length);
console.log("요소 타입: ", messages[1].message);
