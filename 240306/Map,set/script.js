// Map

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup.size); // 사이즈
console.log(myCup.get("color")); // 키에 대한 베일류 값을 가져옴
console.log(myCup.has("color")); // 키가 있는지 확인해줌
myCup.delete("type"); // 이 요소를 삭제
// myCup.clear(); // 모두 삭제

console.log(myCup);

console.log(myCup.keys());

for (let key of myCup.keys()) {
  console.log(key);
}

// 배열과 같이 내부 아이템을 한개씩 찾아와서 반복 순회할 수 있도록 해주는 객체 => 이터레이터 객체

for (let value of myCup.values()) {
  console.log(value);
}

for (let value of myCup.entries()) {
  console.log(value);
}

//set()객체

const numSet1 = new Set();
numSet1.add("one").add("two");

console.log(numSet1);

const numSet2 = new Set([1, 2, 3]);

console.log(numSet2.has(2));
numSet2.delete(1);
numSet2.clear();
console.log(numSet2);
