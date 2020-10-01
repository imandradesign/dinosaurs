// Dinosaur information
let dinos = [
  {
      "species": "Triceratops",
      "weight": 13000,
      "height": 114,
      "diet": "herbavor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "First discovered in 1889 by Othniel Charles Marsh"
  },
  {
      "species": "Tyrannosaurus Rex",
      "weight": 11905,
      "height": 144,
      "diet": "carnivor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "The largest known skull measures in at 5 feet long."
  },
  {
      "species": "Anklyosaurus",
      "weight": 10500,
      "height": 55,
      "diet": "herbavor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Anklyosaurus survived for approximately 135 million years."
  },
  {
      "species": "Brachiosaurus",
      "weight": 70000,
      "height": "372",
      "diet": "herbavor",
      "where": "North America",
      "when": "Late Jurasic",
      "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
  },
  {
      "species": "Stegosaurus",
      "weight": 11600,
      "height": 79,
      "diet": "herbavor",
      "where": "North America, Europe, Asia",
      "when": "Late Jurasic to Early Cretaceous",
      "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  },
  {
      "species": "Elasmosaurus",
      "weight": 16000,
      "height": 59,
      "diet": "carnivor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
  },
  {
      "species": "Pteranodon",
      "weight": 44,
      "height": 20,
      "diet": "carnivor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
  },
  {
      "species": "Pigeon",
      "weight": 0.5,
      "height": 9,
      "diet": "herbavor",
      "where": "World Wide",
      "when": "Holocene",
      "fact": "All birds are living dinosaurs."
  }
]

// Random number generator for displaying different dino facts
let randomNumber = function(){
  let number = Math.floor(Math.random() * 6) + 1;
  if (number < 1 || number > 6){
    randomNumber();
  }
  return number;
}

// Create Dino Constructor
const dino = new Dinosaur();

function Dinosaur(){
    this.species = [];
    this.weight = [];
    this.height = [];
    this.diet = [];
    this.where = [];
    this.when = [];
    this.fact = [];
};

// Randomly selects a dinosaur fact from the "dinos" array to return
Dinosaur.prototype.randomFact = function(){
  for (let i = 0; i < dinos.length - 1; i++){
    let currentNumber = randomNumber();
    let currentDino = dinos[i];

    if (currentNumber === 1){
      let dino1 = new Dinosaur();
      dino1.species.push(currentDino.species);
      dino1.weight.push(`Weight: ` + currentDino.weight + ` lbs`);
      console.log(dino1);
    } else if (currentNumber === 2){
      let dino2 = new Dinosaur();
      dino2.species.push(currentDino.species);
      dino2.height.push(`Height: ` + currentDino.height + ` inches tall`);
      console.log(dino2);
    } else if (currentNumber === 3){
      let dino3 = new Dinosaur();
      dino3.species.push(currentDino.species);
      dino3.diet.push(`Diet: ` + currentDino.diet);
      console.log(dino3);
    } else if (currentNumber === 4){
      let dino4 = new Dinosaur();
      dino4.species.push(currentDino.species);
      dino4.where.push(`Originated from: ` + currentDino.where);
      console.log(dino4);
    } else if (currentNumber === 5){
      let dino5 = new Dinosaur();
      dino5.species.push(currentDino.species);
      dino5.when.push(`Time period: ` + currentDino.when);
      console.log(dino5);
    } else if (currentNumber === 6){
      let dino6 = new Dinosaur();
      dino6.species.push(currentDino.species);
      dino6.fact.push(`Fun fact: ` + currentDino.fact);
      console.log(dino6);
    }
  };
};

//  Dinosaur.prototype.addRow = function(){
//    return "<tr>" + "<th>" + ${} + "</th>" + "<th>" + ${} + "</th>" + "<th>" + ${} + "</th>" + "</tr>"
//  };

// Create Dino Objects

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
  human.name.push(humanName);
  human.height.push(heightFeet + "ft " + heightInches + "in");
  human.weight.push(weight + " lbs");
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


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

  // Add tiles to DOM


// On button click, prepare and display infographic
window.onload = (event) => {
  // Assign sections of the page to variables
  const form = document.getElementById("dino-compare");
  const grid = document.getElementById("grid");
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
