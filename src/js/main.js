let one =document.getElementById("btn-one")// call a element with id
let two = document.getElementsByClassName("btn-two")//call an element with class name
let three = document.getElementsByName("btn-three")// call an element with name
let four = document.getElementsByTagName("button")// call an elements with tag name

console.log(one);
console.log(two[0]);
console.log(three[0]);
console.log(four[3]);


let btn = document.querySelector("#btnN")
let light = document.querySelector(".btn-light")
let btnTodos = document.querySelectorAll(".btn")
let button = document.querySelectorAll("button")


console.log(btn)
console.log(light)
console.log(btnTodos[3])
console.log(button)