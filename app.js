// Dinosaur info array
let dinoInfo = [
  {
      "species": "Triceratops",
      "weight": 13000,
      "height": 114,
      "diet": "Herbavore",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "First discovered in 1889 by Othniel Charles Marsh"
  },
  {
      "species": "Tyrannosaurus Rex",
      "weight": 11905,
      "height": 144,
      "diet": "Carnivore",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "The largest known skull measures in at 5 feet long."
  },
  {
      "species": "Anklyosaurus",
      "weight": 10500,
      "height": 55,
      "diet": "Herbavore",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Anklyosaurus survived for approximately 135 million years."
  },
  {
      "species": "Brachiosaurus",
      "weight": 70000,
      "height": "372",
      "diet": "Herbavore",
      "where": "North America",
      "when": "Late Jurasic",
      "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
  },
  {
      "species": "Stegosaurus",
      "weight": 11600,
      "height": 79,
      "diet": "Herbavore",
      "where": "North America, Europe, Asia",
      "when": "Late Jurasic to Early Cretaceous",
      "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  },
  {
      "species": "Elasmosaurus",
      "weight": 16000,
      "height": 59,
      "diet": "Carnivore",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
  },
  {
      "species": "Pteranodon",
      "weight": 44,
      "height": 20,
      "diet": "Carnivore",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
  },
  {
      "species": "Pigeon",
      "weight": 0.5,
      "height": 9,
      "diet": "Herbavore",
      "where": "World Wide",
      "when": "Holocene",
      "fact": "All birds are living dinosaurs."
  }
]

// Random number generator for displaying different dino facts
let randomNumber = function(){
  let number = Math.floor(Math.random() * 6) + 1;
  return number;
}

// Create Dino Constructor
function Dinosaur(){
  this.species = [];
  this.chosenFact = [];
  this.weight = [];
  this.height = [];
  this.diet = [];
}

// Create Dino Objects
const dino1 = new Dinosaur();
const dino2 = new Dinosaur();
const dino3 = new Dinosaur();
const dino4 = new Dinosaur();
const dino5 = new Dinosaur();
const dino6 = new Dinosaur();
const dino7 = new Dinosaur();

// Randomly selects a dino fact from the dinoInfo array for each dinosaur and pushes the fact and species to the Dino Objects above
let factList = [];

const generateDinoInfo = function(){
  // Pushing the species to the dino objects
  dino1.species.push(dinoInfo[0].species);
  dino2.species.push(dinoInfo[1].species);
  dino3.species.push(dinoInfo[2].species);
  dino4.species.push(dinoInfo[3].species);
  dino5.species.push(dinoInfo[4].species);
  dino6.species.push(dinoInfo[5].species);
  dino7.species.push(dinoInfo[6].species);

  // Looping through the dinoInfo array to get a random fact and pushing those to factList array
  for (let i = 0; i < dinoInfo.length - 1; i++){
    let currentNumber = randomNumber();
    let currentDino = dinoInfo[i];

    if (currentNumber === 1){
      let weight = weightComparison(currentDino.weight);
      factList.push(weight);
    } else if (currentNumber === 2){
      let height = heightComparison(currentDino.height);
      factList.push(height);
    } else if (currentNumber === 3){
      let diet = dietComparison(currentDino.diet);
      factList.push(diet);
    } else if (currentNumber === 4){
      factList.push(`Originated from: ` + currentDino.where);
    } else if (currentNumber === 5){
      factList.push(`Time period: ` + currentDino.when);
    } else if (currentNumber === 6){
      factList.push(`Fun fact: ` + currentDino.fact);
    }
  }
  // Pushing the proper random facts from the factList array to the dino objects
  dino1.chosenFact.push(factList[0]);
  dino2.chosenFact.push(factList[1]);
  dino3.chosenFact.push(factList[2]);
  dino4.chosenFact.push(factList[3]);
  dino5.chosenFact.push(factList[4]);
  dino6.chosenFact.push(factList[5]);
  dino7.chosenFact.push(factList[6]);
};

// Create Human Object
const human = new Human();

function Human(){
  this.name = [];
  this.height = [];
  this.weight = [];
  this.diet = [];
};

// Prototype to push form field data into arrays in the right format
Human.prototype.humanFormData = function(humanName, heightFeet, heightInches, weight, diet){
  let totalHeight = parseInt(heightFeet) * 12 + parseInt(heightInches);

  human.name.push(humanName);
  human.height.push(totalHeight);
  human.weight.push(parseInt(weight));
  human.diet.push(diet);
};

// Clear human data from previous form submissions
Human.prototype.clearData = function(){
  human.name = [];
  human.height = [];
  human.weight = [];
  human.diet = [];
};

// Use IIFE to get human data from form


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
const weightComparison = function(weight){
  let weightDivide = Math.round(weight / human.weight * 10) / 10;

  if (weightDivide === 1){
    return `This dino weighed: ` + weight + `lbs. Which is almost exactly the same as you!`;
  } else if (weightDivide > 1){
    return `This dino weighed: ` + weight + `lbs. Which is ` + weightDivide + ` times more than you!`;
  } else if (weightDivide < 1){
    let weightAdjust = Math.round(human.weight / weight * 10) / 10;
    return `This dino weighed: ` + weight + `lbs. Which is ` + weightAdjust + `times less than you!`;
  }
};

// Create Dino Compare Method 2
const heightComparison = function(height){
  const convertToFeet = function(totalInches){
    let feet = Math.floor(totalInches/12);
    let inches = totalInches%12;
    return feet + ` feet ` + inches + ` inches tall.`;
  }

  let heightDivide = Math.round(height / human.height * 10) / 10;
  let dinoHeight = convertToFeet(height);
  let humanHeight = convertToFeet(human.height);

  if (heightDivide === 1){
    return `This dino is ` + dinoHeight + ` Which is about the same as your height!`
  } else if (heightDivide > 1){
    return `This dino is ` + dinoHeight + ` Which is ` + heightDivide + ` times taller than you!`
  } else if (heightDivide < 1){
    let heightAdjust = Math.round(human.height / height * 10) / 10;
    return `This dino is ` + dinoHeight + ` Which is ` + heightAdjust + ` times shorter than you!`
  }
};

// Create Dino Compare Method 3
const dietComparison = function(diet){
  let humanDiet = human.diet.toString();
  if (diet === humanDiet){
    return `You and this dino have the exact same diet! Always the same with you ` + diet + `s.`;
  } else if (diet !== humanDiet){
    return `This dino is a(n) ` + diet + `, which is different than being a(n) ` + human.diet + ` but you're both pretty cool!`;
  }
};

// Generate Tiles for each Dino in Array

  // Add tiles to DOM


// On button click, prepare and display infographic
window.onload = (event) => {
  // Assign sections of the page to variables
  const form = document.getElementById("dino-compare");
  const results = document.getElementById("results");

  btn.addEventListener("click", function(){
    // Collect data from form fields for human
    const humanName = document.getElementById("name").value;
    const heightFeet = document.getElementById("feet").value;
    const heightInches = document.getElementById("inches").value;
    const weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;

    // Add form field data to arrays within "human" object
    human.humanFormData(humanName, heightFeet, heightInches, weight, diet);

    // Generate info for 7 dinosaurs
    generateDinoInfo();

    // Remove form from screen and display tiles
    form.style.display = 'none';
    results.style.display = 'block';
  });

  resetbtn.addEventListener("click", function(){
    // Reset form fields and "human" data from previous submissions
    form.reset();
    human.clearData();
    // Display form on screen and hide previous results
    form.style.display = 'block';
    results.style.display = 'none';
  });
};
