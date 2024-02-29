// const str = "Hello";
// const greetion = "안녕하세요!";
// const str01 = "Good Morning!";

// console.log(str.length);
// console.log(greetion.length);
// console.log(str01.charAt(0));

// 어떤 글자가 들어가 있는지 알려주는 함수

// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다.`);

const str1 = "Good morning, everyone. Beautiful morning";
str1.indexOf("morning");
console.log(str1.indexOf("evening"));
// console.log(str1.indexOf("morning", firstIndex + 1));

const str2 = "hello, everyone";
str2.startsWith("hello");
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("he"));
console.log(str2.startsWith("hello, ev"));
console.log(str2.startsWith("el", 1));
//인덱스 값
console.log(str2.startsWith("o", 4));

console.log("===endsWith===");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("one"));

console.log("===includes===");
console.log(str2.includes("every"));
console.log(str2.includes("one"));

console.log("===trim methods===");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
console.log(str3_1.trim());
console.log(str3_1.trimStart());
console.log(str3_1.trimEnd());

console.log("===uppercase / Lowercase===");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log("===substring===");
console.log(str4.substring(5, 8));
//인덱스값 5부터 8"앞자리까지"

console.log("===slice===");
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));

console.log("===split===");
const str5 = "Hello everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);
