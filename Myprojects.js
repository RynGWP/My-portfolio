//QUOTES GENERATOR

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

//LEAP YEAR CHECKER

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
});

//Character limits

// let char = document.querySelector("#exampleFormControlTextarea1");
// const charLimiter = document.querySelector("#charLimiter");

// char.addEventListener("input", function () {
//   let Character = char.value;
//   let charLength = Character.length;
//   let charMax = 60;
//   charLimiter.innerHTML = charLength + " / " + charMax;

//   if (charLength >= charMax) {
//     // Disable further input by disabling the textarea
//     char.disabled = true;
//     // Optionally, you can remove the event listener to prevent further checks
//   } else {
//     // Enable the textarea
//     char.disabled = false;
//   }

// });
  
  
// char.addEventListener("keydown", function(e) {
//     let Character = char.value;
//     let charLength = Character.length;

//     // Allow backspace (keyCode 8) and delete (keyCode 46) even if max length is reached
//     if ((e.keyCode === 8 || e.keyCode === 46) && charLength === charMax) {
//         char.disabled = false; // Ensure textarea is enabled for deletion
//     }
// });


// let char = document.querySelector("#exampleFormControlTextarea1");
// const charLimiter = document.querySelector("#charLimiter");
// const charMax = 60; // Define the maximum character limit

// char.addEventListener("input", function () {
//   let Character = char.value;
//   let charLength = Character.length;
  
//   charLimiter.innerHTML = charLength + " / " + charMax;
  
// });





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

char.addEventListener("keydown", function(event) {
    let charLength = char.value.length;

    if (charLength >= charMax && event.key !== "Backspace" && event.key !== "Delete" && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
    }
});
