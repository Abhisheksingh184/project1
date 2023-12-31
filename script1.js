// // //This is a code print hello world
// // console.log("hello world");
// // //This is a single line comment
// // /*This is a multiple line comment
// // fmfifimmfimfmf*/
// //Arithmetic Opeartors
// let a = 5;
// let b = 2;
// console.log("a=", a, "&b=", b);

// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a*b=", a * b);
// console.log("a/b=", a / b);
// console.log("a%b=", a % b);
// console.log("a**b=", a ** b);
// console.log("a++", a++);
// console.log("a--", a--);
// let name = prompt("Enter a number:");
// if (name % 5 === 0) {
//   console.log(name, " is a multiple of 5");
// } else {
//   console.log(name, "is not a multiple of 5");
// }
// let marks = prompt("Enter the marks:");
// if (marks >= 0 && marks <= 49) {
//   console.log("E", "grade");
// } else if (marks >= 50 && marks <= 59) {
//   console.log("D", "grade");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("C", "grade");
// } else if (marks >= 70 && marks <= 89) {
//   console.log("B", "grade");
// } else if (marks >= 90 && marks <= 100) {
//   console.log("A", "grade");
// } else if (marks >= 0 && marks <= 49) {
//   console.log("E", "grade");
// }

//Conditional and operator
// console.log("Apna college");
// for (let i = 1; i <= 10000; i++) {
//   console.log("Apna college");
// }

//Calculate sum os 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("sum=" + sum);
// console.log("loop has ended");

// let s = "Javascript";
// let size = 0;
// for (let i of s) {
//   console.log(i);
//   size++;
// }
// console.log("string size is=", size);

// let student = {
//   name: "rahul",
//   age: 20,
//   cgpa: 8.5,
//   isPass: true,
// };
// for (let i in student) {
//   console.log("key=", i, "value:", student[i]);
// }

//Practice Question 1
//print all even number from 0 to 100

// for (let i = 0; i <= 100; i += 2) {
//   // if (i % 2 === 0) {
//   //   console.log("Even numbers:", i);
//   // }
//   // console.log("Even number:", i);
//   if (!(i & 1)) {
//     console.log(i);
//   }
// }

//Practice question 2
//Create a game of guessing numbers
// while (1) {
//   let num = prompt("Enter the number:");
//   if (num == 5) {
//     console.log("Yes now it is correct");
//     break;
//   } else {
//     console.log("No it is wrong");
//   }
// }

// let gamenum = 25;
// let usernum = prompt("Guess the number:");
// while (usernum != gamenum) {
//   prompt("you entered wrong number, Guess again:");
// }
// console.log("Congratulation, you entered the right number ");

//string in javascript
// let s = "Javascript";
// let n = s.length;
// console.log(s[0]); // it is used to access a single character

// let obj = {
//   item: "pen",
//   price: 10,
// };
// let output = `the cost ${obj.item} is ${obj.price} ruppes`;
// console.log(output);
// console.log("the cost of", obj.item, "is", obj.price);

// //Template Literals
// let sentence = `This is a template literal`;
// console.log(sentence);

// let s = "abhishek";
// console.log(s.toUpperCase());
// let t = "CAMEL";
// console.log(t.toLowerCase());
// let space = "     kaha se bhai     ";
// console.log(space.trim());
// let str = "elephant";
// console.log(str.slice(1, 5));

// let str1 = "apna";
// let str2 = "college";
// // let res = str1.concat(str2);
// let res = str1 + str2;
// console.log(res);

// let str = "hello";
// console.log(str.replace("ll", "mu"));
// console.log(str.replaceAll("ll", "mu"));

// let s = "humayu";
// console.log(s.replace("u", "s"));

//Practice Question 3
//create a full name by concatenate the @ and length of name like abhishek so output @abhishek8

// let fullname = prompt("Enter your full name:");
// // fullname = fullname.trim();
// console.log(fullname);
// let res = "@" + fullname + fullname.length;
// console.log(res);

// let marks_student1=97;
// let marks={
//     stu1:97,
// }
// let marks = [97, 90, 20, 30, 45];
// console.log(marks);
// let heros = ["superman", "thor", "spiderman", "antman"];
// console.log(heros);
// marks[0] = 2; //directly we can change  the values
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// for (let i = 0; i < heros.length; i++) {
//   console.log(heros[i]);
// }

// for (let hero of heros) {
//   console.log(hero.toUpperCase());
// }

//Practice Questions 1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks) {
//   sum = sum + i;
// }
// let avg = sum / marks.length;
// console.log(`average marks of the class=${avg}`);

//Practice Question 2
// let prices = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of prices) {
//   prices[i++] = val - val * 0.1;
// }
// for (let i of prices) {
//   console.log(i);
// }

// let food = ["apple", "orange", "lichi", "grape"];
// food.push("tomato");
// // console.log(food);
// // console.log(food.toString());
// let item = ["thor", "spiderman", "antman"];
// let merge = item.concat(food);
// console.log(merge);
//unshift()
//shift()
//slice(start,end);
//splice(Add,remove,replace)
//splice(startidx,delcount,newele);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"];
// companies.shift();
// companies.splice(2, 1, "OLA");
// companies.push("Amazon");
// console.log(companies);

//Functions in Javascript
// function myfunction(msg, n) {
//   //parameter -> input
//   console.log(msg);
// }
// myfunction("i love javascript", 100); //argument

// function sum(x, y) {
//   console.log(x + y);
// }

// function sum(x, y) {
//   s = x + y;
//   return s;
// }
// let val = sum(3, 4);
// console.log(val);

// function sum(a,b){
//     return a+b;
// }
// function mul(a, b) {
//   return a * b;
// }

//Arrow function
// const arrowsum = (a, b) => {
//   console.log(a + b);
// };
// const arrowmul = (a, b, c) => {
//   console.log(a * b * c);
// };
// const arrowdiv = (a, b) => {
//   console.log(a / b);
// };
// const arrowmod = (a, b) => {
//   console.log(a % b);
// };
// const printhello = () => {
//   console.log("hello");
// };

//Practice Question1
// function count(str) {
//   let c = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       c++;
//     }
//   }
//   console.log(c); //this is first option
//   //   return c;
// }
// let d = count("aeiou");
// console.log(d);

//Arrow function
// const vowel = (str) => {
//   let c = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       c++;
//     }
//   }
//   return c;
// };
// vowel("apna");

//forEach loop
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function myfunction(val) {
//   console.log(val);
// });

// arr.forEach((val) => {
//   console.log(val);
// });

// let city = ["mumbai", "singapore", "pune"];
// city.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
// });

//Practice Question1
// let num = [7, 6, 9, 2, 0];
// // num.forEach((val) => {
// //   console.log(val, val * val);
// // });
// let cal = (nu) => {
//   console.log(nu ** 2);
// };
// num.forEach(cal);

//map in js
// let arr = [10, 20, 30];
// let newa = arr.map((val) => {
//   return val * val;
// });
// console.log(arr);
// console.log(newa);

//filter in js
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newa = arr.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(newa);

//reduce in js
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(sum);

//marks score >90
// let arr = [97, 64, 32, 49, 99, 96, 86];
// let newarr = arr.filter((val) => {
//   return val > 90;
// });
// console.log(newarr);

let n = prompt("Enter the number");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
console.log(arr);
// let arr = [10, 20, 30, 40, 50];
const newarr = arr.reduce((prev, curr) => {
  return prev + curr;
});
const nearr = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log("sum=", newarr);
console.log("product=", nearr);
