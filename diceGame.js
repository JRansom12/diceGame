// let yourName = prompt("Welcome to the game Cross the Country!\nWhat is your name?");
// let thingInNewYork = prompt("What would you like to see in New York City?");
// let dreamCar = prompt("What is your dream car?");
// let horseName = prompt("What name do you think is a really cool name?");
// let firstRoll = alert("Welcome to the game Cross the Country! You're in San Francisco at the airport going to New York City. You've lost all your belongings but you still have a ticket. Roll to see which city your ticket flies to. Can you make it all the way to NYC?");

function rollDice(number) {
  	let roll = Math.floor((Math.random() * number) + 1);
  	return roll;
}

let planeTravel = rollDice(6);
	// if(planeTravel == 1){ //Kansas City
 //  		milesRemain = 1192;
 //  		  		alert("You rolled a 1. You're in Kansas City. You have 1192 miles to go! Good luck, you're gonna need it.");
 //  		return milesRemain;
 //  	}
 //  	if(planeTravel == 2){ //Memphis
 //  		milesRemain = 1097;
 //  		  		alert("You rolled a 2. You're in Memphis. You have 1,097 miles to go! You're going to need some grit to make it.");
 //  		return milesRemain;
 //  	}
 //  	if(planeTravel == 3){ //St. Louis
 //  		milesRemain = 954;
 //  		  		alert("You rolled a 3. You're in the gateway to the West, St. Louis. You have 954 miles to go!");
 //  		return milesRemain;
 //  	}
 //  	if(planeTravel == 4){ //Nashville
 //  		milesRemain = 886;
 //  		  		alert("You rolled a 4. You're in Nashville. You have 886 miles of country to go!");
 //  		return milesRemain;
 //  	}
 //  	if(planeTravel == 5){ //Atlanta
 //  		milesRemain = 864;
 //  		  		alert("You rolled a 5. You land in Atanta with 864 miles remaining.");
 //  		return milesRemain;
 //  	}
 //  	if(planeTravel == 6){ //Chicago
 //  		milesRemain = 789;
 //  		  		alert("You rolled a 6. You're in the Windy City! Chicago is as close as you can be so far with 789 miles to go.")
 //  		return milesRemain;
 //  	}
let milesRemain = 800
console.log(planeTravel);
console.log(milesRemain);	

let carTravel = rollDice(20);
let gasTank = 10 + (1/2) * carTravel;
let milesTravCar = 30 * gasTank;
let milesRemain1 = milesRemain - milesTravCar;
console.log(carTravel);
console.log(milesRemain1);

let hitchHikeTravel = rollDice(6);
let milesTravHitchHike = 180 + 30 * hitchHikeTravel;
let milesRemain2 = milesRemain1 - milesTravHitchHike;
console.log(hitchHikeTravel);
console.log(milesRemain2);
  if(milesRemain2 < 0){
    console.log("Congratulations! You've made it Cross the Country.");
  }


let walkTravel = rollDice(12);
let milesTravWalk = 3 * walkTravel;
let milesRemain3 = milesRemain2 - milesTravWalk;
console.log(walkTravel);
console.log(milesRemain3);
if(milesRemain3 < 0){
  console.log("Congratulations! You've made it Cross the Country.");
}

let trainTravel = rollDice(8);
let milesTravTrain = 20 * trainTravel;
let milesRemain4 = milesRemain3 - milesTravTrain;
console.log(trainTravel);
console.log(milesRemain4);
if(milesRemain4 < 0){
  console.log("Congratulations! You've made it Cross the Country.");
}

let bikeTravel = rollDice(10);
let milesTravBike = 5 * bikeTravel;
let milesRemain5 = milesRemain4 - milesTravBike;
console.log(bikeTravel);
console.log(milesRemain5);
if(milesRemain5 < 0){
  console.log("Congratulations! You've made it Cross the Country.");
}

let horseTravel = rollDice(4);
let milesTravHorse = 10 * horseTravel
let milesRemain6 = milesRemain5 - milesTravHorse
console.log(horseTravel);
console.log(milesRemain6);

if(milesRemain6 < 0){
  console.log("Congratulations! You've made it Cross the Country.");
}
else{
  console.log("You failed to Cross the Country, better luck next time.");
}

// function rollDice(number) {
//   let roll = Math.floor((Math.random() * number) + 1);
//   	if(roll == 1){ //Kansas City
//   		milesRemain = 1192;
//   		return milesRemain;
//   	}
//   	if(roll == 2){ //Memphis
//   		milesRemain = 1097;
//   		return milesRemain;
//   	}
//   	if(roll == 3){ //St. Louis
//   		milesRemain = 954;
//   		return milesRemain;
//   	}
//   	if(roll == 4){ //Nashville
//   		milesRemain = 886;
//   		return milesRemain;
//   	}
//   	if(roll == 5){ //Atlanta
//   		milesRemain = 864;
//   		return milesRemain;
//   	}
//   	if(roll == 6){ //Chicago
//   		milesRemain = 789;
//   		return milesRemain;
//   	}
// }
// console.log(rollDice(6));

// function rollDice(number) {
//   let x = Math.floor((Math.random() * number) + 1);
//   return x;
//   }
// console.log(rollDice(4));