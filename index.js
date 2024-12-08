// // task 1
//alert("welcom to javascript");
//let name = prompt("enter you name please");
//document.write("Hello " + name + " ^_^");

// // task 2
// let tempToday = temp => 
//     temp >= 30? document.write("HOT"):document.write("Cold");
// //tempToday(30);

// document.write("<br>today the temprature is "), tempToday(30);

// // task 3
// let name;
// while (name === undefined || !isNaN(name)) {
//     name = prompt("what is your name: ");
// }

// let year;
// while (!year || isNaN(year) ) {
//     year = prompt("what is your birth year: ");
//     console.log(typeof(year));
// }
// let age;
// if (year < 2010){
//     age = 2024 - year;
//     document.write("<b><u>Name:</u></b> " + name + "<br><b><u>Birth year:</u></b> " + year+ "<br><b><u>Age:</u></b> " + age);
// } else {
//     document.write("you are too young 🥰");
// }

//task 4
for(let i = 1 ; i<=6 ; i++) {
    document.write("<h"+i+"> welcome to my page </h"+i+">");
}