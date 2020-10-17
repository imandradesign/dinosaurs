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

// Function to convert height from inches to readable format
const convertToFeet = function(totalInches){
  let feet = Math.floor(totalInches/12);
  let inches = totalInches%12;
  return feet + ` ft ` + inches + ` in tall`;
}

// Create Dino Constructor
function Dinosaur(){
  this.species = [];
  this.chosenFact = [];
  this.imageUrl = [];
}

// Append dinosaur and bird tiles onto page
Dinosaur.prototype.createTile = function(id){
  let tile = document.createElement('th');

  tile.innerHTML = "<th><h2 id='title'>" + this.species + "<br><img src='../dinosaurs/images/" + this.imageUrl + ".png'></h2><br><h4 id='fact'>" + this.chosenFact + "</h4></th>";
  id.appendChild(tile);
}

// Create Dino & Bird Objects
const dino1 = new Dinosaur();
const dino2 = new Dinosaur();
const dino3 = new Dinosaur();
const dino4 = new Dinosaur();
const dino5 = new Dinosaur();
const dino6 = new Dinosaur();
const dino7 = new Dinosaur();
const dino8 = new Dinosaur();

// Add static bird data to object
(function(){
  dino8.species.push(dinoInfo[7].species);
  dino8.chosenFact.push(dinoInfo[7].fact);
})();

// Variable to add images to the dinosaur objects
let imageUrls = [];

(function(){
  for(let i = 0; i < dinoInfo.length; i++){
    let species = dinoInfo[i].species;
    let filename = species.toString().toLowerCase();
    imageUrls.push(filename);
  }
  dino1.imageUrl.push(imageUrls[0]);
  dino2.imageUrl.push(imageUrls[1]);
  dino3.imageUrl.push(imageUrls[2]);
  dino4.imageUrl.push(imageUrls[3]);
  dino5.imageUrl.push(imageUrls[4]);
  dino6.imageUrl.push(imageUrls[5]);
  dino7.imageUrl.push(imageUrls[6]);
  dino8.imageUrl.push(imageUrls[7]);
})();

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
  for(let i = 0; i < dinoInfo.length - 1; i++){
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

// Append Human tile onto page with form data
Human.prototype.createTile = function(id){
  let height = convertToFeet(this.height);
  let tile = document.createElement('th');
  tile.innerHTML = "<th><h2 id='title'>" + this.name + "</h2><br><img src='../dinosaurs/images/human.png'><h4 id='fact'>Height: " + height + "<br>Weight: " + this.weight + " lbs<br>Diet: " + this.diet + "</h4></th>";
  id.appendChild(tile);
}

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
  let heightDivide = Math.round(height / human.height * 10) / 10;
  let dinoHeight = convertToFeet(height);
  let humanHeight = convertToFeet(human.height);

  if (heightDivide === 1){
    return `This dino is ` + dinoHeight + `. Which is about the same as your height!`
  } else if (heightDivide > 1){
    return `This dino is ` + dinoHeight + `. Which is ` + heightDivide + ` times taller than you!`
  } else if (heightDivide < 1){
    let heightAdjust = Math.round(human.height / height * 10) / 10;
    return `This dino is ` + dinoHeight + `. Which is ` + heightAdjust + ` times shorter than you!`
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

window.onload = (event) => {
  // Assign sections of the page to variables
  const form = document.getElementById("dino-compare");
  const results = document.getElementById("results");
  const rowOne = document.getElementById("row1");
  const rowTwo = document.getElementById("row2");
  const rowThree = document.getElementById("row3");

  // On button click, prepare and display infographic
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

    // Generate Tiles for each Dino in Array
    dino1.createTile(rowOne, dino1);
    dino2.createTile(rowOne, dino2);
    dino3.createTile(rowOne, dino3);
    dino4.createTile(rowTwo, dino4);
    human.createTile(rowTwo);
    dino5.createTile(rowTwo, dino5);
    dino6.createTile(rowThree, dino6);
    dino7.createTile(rowThree, dino7);
    dino8.createTile(rowThree, dino8);

    // Add tiles to DOM

    // Remove form from screen and display tiles
    form.style.display = 'none';
    results.style.display = 'flow';
  });

// Reset form to retry submission without refresh
  // resetbtn.addEventListener("click", function(){
  //   // Reset form fields and "human" data from previous submissions
  //   form.reset();
  //   human.clearData();
  //   // Display form on screen and hide previous results
  //   form.style.display = 'flow';
  //   results.style.display = 'none';
  // });
};
