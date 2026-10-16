// document.getElementById("SPA").textContent = "How In Dey Be Nah";

// let age = 26;

// console.log(`My Age is ${age}`)

// let result = 9 * 2/6;
// console.log(result)

// SO ` WORKS FOR F STRING AND THERE IS DOLLAR SIGN IN FRONT OF THE VARIABLE

// let username;


// username = window.prompt("What Is Your Username?")

// document.getElementById("name").textContent = `Hello! Welcome ${username}`

// let username;


// document.getElementById("btn").onclick = function() {
//     username =  document.getElementById("sharp").value;
//     document.getElementById("sharp").textContent =  username;
//     document.getElementById("name").textContent = `Hello ${username}, welcome onboard!`
// }


// CIRCUMFERENCE CALCULATION 
// let radius;
// const PI = 3.142;
// let circumference;


// document.getElementById("btn").onclick = function() {
//     radius = document.getElementById("sharp").value;

//     radius = Number(radius);

//     circumference = 2 * PI * radius;

//     window.alert(`The Area Of your Circumference is ${circumference}cm`);
// };


// COUNTER PROGRAM


// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const lbl = document.getElementById("lbl");
// let count = 0;


// increaseBtn.onclick = function(){
//     count++;
//     lbl.textContent = count;
// }


// decreaseBtn.onclick = function(){
//     count--;
//     lbl.textContent = count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     lbl.textContent = count;
// }

// let age;
// let Drv =  document.getElementById("Pra")


// document.getElementById("btn").onclick = function(){

//     age  = Number(document.getElementById("inp").value);

//     if(age == 0) {
//        window.alert(`You can't be 0 years`);
//        window.alert(`You must be 18+`);
//     }

//     else if(age < 0) {
//       window.alert(`You can't be less than 0 years`);
//        window.alert(`You must be 18+`);
//     }

//     else if(age <= 16) {
//       window.alert(`You can't Drive!!`);
//        window.alert(`You must be 18+`);
//     }

//     else if(age >= 18) {
//         window.alert(`You Can Drive!!!`)
//     }

//     else{
//         Drv.textContent="You Must be 18+";
//     }

// }

//  CHECKED PROGRAM


// const myRadio1 = document.getElementById("myRadio1");
// const myRadio2 = document.getElementById("myRadio2");
// const myRadio3 = document.getElementById("myRadio3");
// const btn = document.getElementById("btn");

// btn.onclick = function() {
//     if(myRadio1.checked){
//         window.alert("Your payment detail is Paypal!");
//         window.prompt("Enter your Paypal Details:");
//     }

//     else if(myRadio2.checked){
//         window.alert("Your payment detail is Mastercard!");
//         window.prompt("Enter your MasterCard Details:");
//     }
//     else if(myRadio3.checked){
//         window.alert("Your payment detail is Verve!");
//         window.prompt("Enter your Verve Details:");
//     }
//     else{
//         window.alert("You didn't pick any payment details!")
//     }
// }

// TERNARY OPERATOR
// let age = 18;

// let message = age <= 17? "You are underage":"You are an adult now";

// console.log(message)



// STRING SHII AND SLICING

// const username = "mmr730815@gmail.com"

// fullNmae = username.slice(0,username.indexOf("@"))

// console.log(fullNmae)

// WHILE AND FOR LOOP
// isRunning = true

// while(isRunning) {
//  let Username = window.prompt('What is your Username? ');
//  let Password = window.prompt('What is your Password? ');

//   if (Username.trim() === "" && Password.trim() === ""){
//     window.alert("You didn't Input a Parameter!")
//   }
//   else if(Username.trim() === "" || Username === null ){
//     window.alert(" You Didn't Input a  Username!!");
//   }
   
//   else if(Password.trim() === "" || Password === null){
//     window.alert("You Didn't Input a Password!!");
//   }
//   else if( Password === null && Username.trim() === "" || Username === null) {
//     window.alert("You Didn't Input a Parameter");
//   }

 
//   else {
//     isRunning = false;
//     window.alert("You are have login!!");
//   }

// }


// FOR LOOP 

// for(let i = 12; i >= 0; i -= 2){
//   console.log(i)
// }


// RANDOM NUMBEER GUESSING 
// isRunning = true

// while(isRunning){

//     const minNum = 1;
//     const maxNum = 100;

//     let answer = Math.round( Math.random() * minNum * maxNum);

//     opinion = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);


//     if(Number(opinion) === answer){
//         window.alert("You won!!");
//         isRunning = false;
//     }
//     else if(isNaN(opinion)){
//         window.alert(`Please input a number ${opinion} is not a number!! `)
//     }
//     else{
//         window.alert(`The answer is ${answer}`)
//         window.alert("You Lost!!!")
//     }

// }
   


//  TEMPERATURE CONVERSION SHII

const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3")
const btn = document.getElementById("btn");
const para = document.getElementById("para")
let answer;
let result;

btn.onclick = function(){
   result = inp1.value;
   if(inp2.checked){
      answer = Math.round((result * 1.8) + 32);
      para.textContent= `The temperature is ${answer}°F`;
     }
   else if(inp3.checked){
      answer = Math.round((result -32) * 0.56) ;
      para.textContent = `The temperature is ${answer}°C`;
     }
   else if(result === ""  || result === isNaN(result)){
      window.alert("Input a parameter, it Empty!!");
    }
   else if(!inp2.checked || !inp3.checked) {
      window.alert("Select a Conversion!!");
    }
}

