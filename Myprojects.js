//QUOTES GENERATOR -----------------------------------------------------------------------------------------------------------------------------------

let quotes = [
  '"Life is like a bycicle, you need to keep moving to balance."',
  '"The biggest risk is not taking risk. In a world that is changing really quickly. the only strategy that is guaranteed to fail is not taking any risks."',
  '"Atheism is so disgusting and meaningless that it has never had many advocates."',
  '"The first gulp from the glass of natural sciences will make you an atheist but at the bottom of the glass God is waiting for you."',
  '"It may seem difficult at first, but everything is difficult at first."',
  '"Half of the troubles of this life can be traced to saying yes too quickly and not saying no soon enough."',
  '"Perfectionism is a disease. Procrastination is a diseas. ACTION is the cure."',
];

let persons = [
  "- Albert Einstein",
  " - Mark Zuckerberg",
  " - Isaac Newton",
  " - Werner Heisenberg",
  " - Miyamoto Musahi",
  " - Josh Billings",
  " - Richie Norton",
];

let quote = document.querySelector("#text-area");
let generateButton = document.querySelector("#generate-button");
let person = document.querySelector("#person");

generateButton.addEventListener("click", function () {
  var random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random];
  person.innerHTML = persons[random];
});

//LEAP YEAR CHECKER -----------------------------------------------------------------------------------------------------------------------------------

leapYearchecker = document.querySelector("#checkYear");
leapYearchecker.addEventListener("click", function () {
  let yearInput = document.querySelector("#yearInput").value;
  let leapYearResult = document.querySelector("#leapYearResult");

  if (yearInput % 4 === 0) {
    if (yearInput % 100 === 0) {
      if (yearInput % 400 === 0) {
        leapYearResult.innerHTML = "Result :" + " Leap year";
      } else {
        leapYearResult.innerHTML = "Result :" + " Not a leap year";
      }
    } else {
      leapYearResult.innerHTML = "Result :" + " Leap year";
    }
  } else {
    leapYearResult.innerHTML = "Result :" + " Not a leap year";
  }

  if (yearInput === "") {
    leapYearResult.innerHTML = "";
  }
});

//Character limiter -----------------------------------------------------------------------------------------------------------------------------------

let char = document.querySelector("#exampleFormControlTextarea1");
const charLimiter = document.querySelector("#charLimiter");
const charMax = 60; // Define the maximum character limit

char.addEventListener("input", function () {
  let Character = char.value;
  let charLength = Character.length;

  if (charLength > charMax) {
    char.value = Character.substring(0, charMax);
    charLength = charMax; // Update charLength to max value if limit is exceeded
  }

  charLimiter.innerHTML = charLength + " / " + charMax;
});

char.addEventListener("keydown", function (event) {
  let charLength = char.value.length;

  if (
    charLength >= charMax &&
    event.key !== "Backspace" &&
    event.key !== "Delete" &&
    !event.metaKey &&
    !event.ctrlKey
  ) {
    event.preventDefault();
  }
});

//Dice Game -----------------------------------------------------------------------------------------------------------------------------------
let clickSound = new Audio("./Assets/clickSound.mp3");
const diceButton = document.querySelector("#dice-Button");
let player1Dice = document.querySelector("#player1Random");
let player2Dice = document.querySelector("#player2Random");
let winnerText = document.querySelector(".winner");
const dots = document.querySelector("#dotsp1");
const dots2 = document.querySelector("#dotsp2");
const Dices = [
  {
    Dice: "dicebox1",
    dot: "dots1",
  },
  {
    Dice: "dicebox2",
    dot: "dots2",
  },
  {
    Dice: "dicebox3",
    dot: "dots3",
  },
  {
    Dice: "dicebox4",
    dot: "dots4",
  },
  {
    Dice: "dicebox5",
    dot: "dots5",
  },
  {
    Dice: "dicebox6",
    dot: "dots6",
  },
];

function changeDotsPlayer1() {
  let randomDice1 = Math.floor(Math.random() * Dices.length);
  //Create variable for classlist player1
  let recentDice = player1Dice.classList;
  let recentdots = dots.classList;

  //replace and change the Classlist
  player1Dice.classList.replace(recentDice, Dices[randomDice1].Dice);
  dots.classList.replace(recentdots, Dices[randomDice1].dot);
  return randomDice1;
}

function changeDotsPlayer2() {
  let randomDice2 = Math.floor(Math.random() * Dices.length);

  //Create variable for classlist player2
  let recentDice2 = player2Dice.classList;
  let recentdots2 = dots2.classList;

  //replace and change the Classlist
  player2Dice.classList.replace(recentDice2, Dices[randomDice2].Dice);
  dots2.classList.replace(recentdots2, Dices[randomDice2].dot);
  return randomDice2;
}

//Button event listener
diceButton.addEventListener("click", function (e) {
  clickSound.play();

  let player1Score = changeDotsPlayer1();
  let player2Score = changeDotsPlayer2();

  if (player1Score > player2Score) {
    winnerText.innerHTML = "Player 1 Wins";
  } else if (player2Score > player1Score) {
    winnerText.innerHTML = "Player 2 Wins";
  } else {
    winnerText.innerHTML = "It's a Tie";
  }
});

// Simon Game ---------------------------------------------------------------------------------------------------------------------------------

let buttonColours = ["red", "green", "blue", "yellow"];

let started = false;
let gamePattern = [];
let userClickPattern = [];
let userChosenColours = [];
let level = 0;

$(document).click(function () {
  $("h1").text("Level " + level);
  if (!started) {
    nextSequence();
    started = true;
  }
});

$(".button").on("click", function () {
  let userChosenColour = $(this).attr("id");
  userClickPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickPattern.length - 1);
});

function nextSequence() {
  userClickPattern = [];
  level = level + 1;
  $("h1").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let newRandomColor = buttonColours[randomNumber];
  gamePattern.push(newRandomColor);
  animatePress(newRandomColor);
  playSound(newRandomColor);
}

function playSound(sound) {
  let gameSound = new Audio("./Assets/" + sound + ".mp3");
  gameSound.play();
}

function animatePress(currentPress) {
  $("#" + currentPress).addClass("pressed");

  setTimeout(function () {
    $("#" + currentPress).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}
