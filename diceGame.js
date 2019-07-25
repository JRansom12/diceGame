let userName = prompt("What is your name?");
let dreamCar = prompt("What is your dream car?");
let horseName = prompt("What is a name you think is really cool?");
let firstRoll = alert(userName + ", welcome to Cross the Country! You're in San Francisco at the airport and you must go to New York City. You've lost all your belongings but still have your ticket. Roll a 6 sided die to see which city your ticket takes you to. Can you Cross the Country?");

function rollDice(number) {
  	let roll = Math.floor((Math.random() * number) + 1);
  	return roll;
}

function crossTheCountry(){ //masterFunction
  let milesToGo = planeRide() - carRide() - hitchHike() - walk() - trainRide() - bikeRide() - horseRide();
      if(milesToGo <= 0){
        alert("Congratulations! You crossed the country.");
      }
      else(milesToGo > 0)
        alert("You failed to cross the country. You were " + milesToGo + " miles short. Better luck next time.");
      }

function planeRide() {
let planeTravel = rollDice(6);
	if(planeTravel == 1){ //Kansas City
  		milesRemain = 1192;
  		  		alert("You rolled a 1. You're off to Kansas City. You'll have 1192 miles to go! Good luck, you're gonna need it.");
  		return milesRemain;
  	}
  	if(planeTravel == 2){ //Memphis
  		milesRemain = 1097;
  		  		alert("You rolled a 2. You land in Memphis with 1,097 miles to go. You're going to need some grit to make it.");
  		return milesRemain;
  	}
  	if(planeTravel == 3){ //St. Louis
  		milesRemain = 954;
  		  		alert("You rolled a 3. You're in the gateway to the West, St. Louis. You have 954 miles to go!");
  		return milesRemain;
  	}
  	if(planeTravel == 4){ //Nashville
  		milesRemain = 886;
  		  		alert("You rolled a 4. You're in Nashville. You have 886 miles of country to go!");
  		return milesRemain;
  	}
  	if(planeTravel == 5){ //Atlanta
  		milesRemain = 864;
  		  		alert("You rolled a 5. You land in Atanta with 864 miles remaining.");
  		return milesRemain;
  	}
  	if(planeTravel == 6){ //Chicago
  		milesRemain = 789;
  		  		alert("You rolled a 6. You're in the Windy City! Chicago is as close as you can be so far with 789 miles to go.")
  		return milesRemain;
  	}
}
console.log(planeRide());

alert("Your ticket comes with a car rental. You rent a " + dreamCar +"! Roll to see how many gallons are in the tank.");

function carRide(){
    let carRoll = rollDice(20);
    let gasTank = 10 + (1/2) * carRoll;
    let milesTravCar = 30 * gasTank;
        console.log(carRoll);
        return milesTravCar;
    alert("You rolled a " + carRoll + ". You've got " + gasTank + " gallons in the tank. You can drive " + milesTravCar + " miles before you run out of gas.");
}

alert("You're out of gas. As you walk away your " + dreamCar + " gets smaller each step you take. You put your thumb up; a semi-truck picks you up right away. The driver says he will drive as long as you can tell him some good stories. Roll to see how far you make it.");

function hitchHike(){
    let hitchHikeRoll = rollDice(6);
    let milesTravHitchHike = 180 + 30 * hitchHikeRoll;
        console.log(hitchHikeRoll);
        return milesTravHitchHike;
    alert("You rolled a " + hitchHikeRoll + ". He ends up driving you " + milesTravHitchHike + " miles before you're out of stories.");   
}

alert("You're walking now. How much energy do you have? Roll a 12 sided die to find out.");

function walk(){
    let walkRoll = rollDice(12);
    let milesTravWalk = 3 * walkRoll;
        console.log(walkRoll);
        return milesTravWalk;
        if(walkRoll <= 4){
            alert("You rolled a " + walkRoll + ". You didn't have much energy. You walked " + milesTravWalk + " miles before getting exhausted.");
}
        else if(walkRoll > 4 && walkRoll <= 8){
            alert("You rolled a " + walkRoll + ". You had a good amount of energy and walked " + milesTravWalk + " miles before getting exhausted.");
  }
        else{
            alert("You rolled a " + walkRoll + "! You had gratuitous amounts of energy and walked " + milesTravWalk + " miles before getting exhausted.");
  }
}

alert("You're about to collapse when you hear a train. With one last burst of energy you throw yourself on a train car. Roll an 8 sided die to see how far the train travels before its next station.");

function trainRide(){
    let trainRoll = rollDice(8);
    let milesTravTrain = 20 * trainRoll;
        console.log(trainRoll);
    return milesTravTrain;
alert("You rolled a " + trainRoll + ". The train ends up going " + milesTravTrain + " miles. You hop off as the train grinds to a halt.");
}

alert("You find a bicycle lying around. You're feeling a bit rested from the train ride, maybe you can ride the rest of the way. You got this, " + userName + "!, you tell yourself. Roll a 10 sided die to determine how far you bike.");

function bikeRide(){
    let bikeRoll = rollDice(10);
    let milesTravBike = 5 * bikeRoll;
        console.log(bikeRoll);
    return milesTravBike;
alert("You rolled a " + bikeRoll + ". and you biked " + milesTravBike + " miles.");
}

alert("Uh oh! You've got a flat tire. But there's a barn nearby and you can ride a horse! You name your horse " + horseName + " and saddle up. Roll a 4 sided die to see how far you ride.");

function horseRide(){
    let horseRoll = rollDice(4);
    let milesTravHorse = 10 * horseRoll
        console.log(horseRoll);
    return milesTravHorse;
alert("You rolled a " + horseRoll + ". You ride " + horseName + " " + milesTravHorse + " miles before your new horse needs a rest, and so do you.")
}

console.log(crossTheCountry());