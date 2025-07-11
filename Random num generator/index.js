// RANDOM NUM GENERATOR
// first create all the varibales which will be required in project

const mybutton = document.getElementById('mybutton'); 
const mylabel = document.getElementById('mylabel');

const min = 1;
const max = 6;
let randomNum;
 // we will assign its value in the function later

// mybutton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     mylabel.textcontent = randomNum;
// }

document.getElementById('mybutton').onclick = function() {
    // Generate a random number between 1 and 6
    const randomNum = Math.floor(Math.random() * max) + min;
  
    document.getElementById('mylabel').textContent = randomNum;
   
}

// now if i want to roll 3 dice at once
// add more label variables ...and write functions ..to them like we did for the first label