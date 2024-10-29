let val;

// NOTE: Javascript 함수를 사용해서 타입변환
// Number -> String
val = String(111);
val = String(8 + 4);

// Boolean to String
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4, 5]);

// toString()
val = (5).toString();

// String to Number
val = Number('1');
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number([1, 2, 3]); // NaN = Not a Number

val = parseInt('111.40');
val = parseFloat('111.40');

console.log('val: ', val);
console.log(typeof val);
console.log(val.length);


// NOTE: Javascript 자체에 의해 자동으로 타입변환
const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;
console.log('sum: ', sum); // 23
console.log(typeof sum);
