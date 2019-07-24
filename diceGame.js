// let yourName = prompt("Welcome to the game Cross the Country!\nWhat is your name?");
// let thingInNewYork = prompt("What would you like to see in New York City?");
// let dreamCar = prompt("What is your dream car?");
// let horseName = prompt("What name do you think is a really cool name?");
let firstRoll = alert("You're in San Francisco at the airport on a mission to get to New York City to see thingInNewYork. You've lost all your belongings but you still have your ticket. Can you make it to NYC? Roll 6 side to see which city you fly to.");

function rollDice(number) {
  	let roll = Math.floor((Math.random() * number) + 1);
 		return roll; 
//Create an Array for outcomes
//  	if(roll == 1){ //Kansas City
//   		milesRemain = 1192;
//   		  		alert("You rolled a 1. You're in Kansas City. You have 1192 miles to go! Good luck, you're gonna need it.");
//   		return milesRemain;
//   	}
//   	if(roll == 2){ //Memphis
//   		milesRemain = 1097;
//   		  		alert("You rolled a 2. You're in Memphis. You have 1,097 miles to go! You're going to need some grit to make it.");
//   		return milesRemain;
//   	}
//   	if(roll == 3){ //St. Louis
//   		milesRemain = 954;
//   		  		alert("You rolled a 3. You're in the gateway to the West, St. Louis. You have 954 miles to go!");
//   		return milesRemain;
//   	}
//   	if(roll == 4){ //Nashville
//   		milesRemain = 886;
//   		  		alert("You rolled a 4. You're in Nashville. You have 886 miles of country to go!");
//   		return milesRemain;
//   	}
//   	if(roll == 5){ //Atlanta
//   		milesRemain = 864;
//   		  		alert("You rolled a 5. You land in Atanta with 864 miles remaining.");
//   		return milesRemain;
//   	}
//   	if(roll == 6){ //Chicago
//   		milesRemain = 789;
//   		  		alert("You rolled a 6. You're in the Windy City! Chicago is as close as you can be so far with 789 miles to go.")
//   		return milesRemain;
//   	}
//  }
// console.log(rollDice(6));

function rollDice(number) {
  let roll = Math.floor((Math.random() * number) + 1);
  	if(roll == 1){ //Kansas City
  		milesRemain = 1192;
  		return milesRemain;
  	}
  	if(roll == 2){ //Memphis
  		milesRemain = 1097;
  		return milesRemain;
  	}
  	if(roll == 3){ //St. Louis
  		milesRemain = 954;
  		return milesRemain;
  	}
  	if(roll == 4){ //Nashville
  		milesRemain = 886;
  		return milesRemain;
  	}
  	if(roll == 5){ //Atlanta
  		milesRemain = 864;
  		return milesRemain;
  	}
  	if(roll == 6){ //Chicago
  		milesRemain = 789;
  		return milesRemain;
  	}
}
console.log(rollDice(6));

// function rollDice(number) {
//   let x = Math.floor((Math.random() * number) + 1);
//   return x;
//   }
// console.log(rollDice(4));