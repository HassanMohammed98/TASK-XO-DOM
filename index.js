// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
const data = {
  X: [],
  O: [],
  winning: [],
  status: "",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  if (text.toUpperCase() === "X") {
    document.getElementById(index).style.color = "BlanchedAlmond";
  } else if (text.toUpperCase() === "O") {
    document.getElementById(index).style.color = "LightSkyBlue";
  } else {
    document.getElementById(index).style.color = "Black";
  }
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).style.backgroundColor = "Crimson";
  }
  for (let i = 0; i < 3; i++) {
    document.getElementById(data.winning[i]).style.backgroundColor =
      "rgb(111, 243, 111)";
  }
  confirm(`Horraaay, ${winner} wins!`);
  sleep(2000).then(() => {
    restartGame();
  });

  // document.getElementById(index).style.backgroundColor = "rgb(9, 230, 9)";
}

function drawAlert() {
  confirm("This game is a Draw, lets Try again!");
  sleep(2000).then(() => {
    restartGame();
  });
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
//fillButton(1, "X");
//fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let counter = 0;
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  if (data.winning.length !== 3) {
    counter++;
    if (
      data.X.some((check) => check === index) ||
      data.O.some((check) => check === index)
    ) {
    } else {
      if (counter % 2 === 1) {
        fillButton(index, "X");
        data.X.push(index);

        if ([1, 2, 3].every((i) => data.X.includes(i))) {
          data.winning.push(1, 2, 3);
        } else if ([4, 5, 6].every((i) => data.X.includes(i))) {
          data.winning.push(4, 5, 6);
        } else if ([7, 8, 9].every((i) => data.X.includes(i))) {
          data.winning.push(7, 8, 9);
        } else if ([1, 4, 7].every((i) => data.X.includes(i))) {
          data.winning.push(1, 4, 7);
        } else if ([2, 5, 8].every((i) => data.X.includes(i))) {
          data.winning.push(2, 5, 8);
        } else if ([3, 6, 9].every((i) => data.X.includes(i))) {
          data.winning.push(3, 6, 9);
        } else if ([1, 5, 9].every((i) => data.X.includes(i))) {
          data.winning.push(1, 5, 9);
        } else if ([3, 5, 7].every((i) => data.X.includes(i))) {
          data.winning.push(3, 5, 7);
        }

        if (data.winning.length === 3) {
          winningAlert("X");
        } else if (data.X.length + data.O.length === 9) {
          drawAlert();
        }
      } else {
        fillButton(index, "O");
        data.O.push(index);

        if ([1, 2, 3].every((i) => data.O.includes(i))) {
          data.winning.push(1, 2, 3);
        } else if ([4, 5, 6].every((i) => data.O.includes(i))) {
          data.winning.push(4, 5, 6);
        } else if ([7, 8, 9].every((i) => data.O.includes(i))) {
          data.winning.push(7, 8, 9);
        } else if ([1, 4, 7].every((i) => data.O.includes(i))) {
          data.winning.push(1, 4, 7);
        } else if ([2, 5, 8].every((i) => data.O.includes(i))) {
          data.winning.push(2, 5, 8);
        } else if ([3, 6, 9].every((i) => data.O.includes(i))) {
          data.winning.push(3, 6, 9);
        } else if ([1, 5, 9].every((i) => data.O.includes(i))) {
          data.winning.push(1, 5, 9);
        } else if ([3, 5, 7].every((i) => data.O.includes(i))) {
          data.winning.push(3, 5, 7);
        }

        if (data.winning.length === 3) {
          winningAlert("O");
          data.status = "gameEnded";
        }
      }
    }
  }
  console.log(data.X);
  console.log(data.O);
  console.log(data.status);
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer(index) {}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner

function restartGame() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).style.backgroundColor = "rgb(227, 227, 227)";
    fillButton(i, "");
  }
  counter = 0;
  data.X = [];
  data.O = [];
  data.status = ".jjfjfj";
  data.winning = [];
  console.log(data.X);
  console.log(data.O);
  console.log(data.status);
}

//  (data.X.some((check) => check === 1) &&
//    data.X.some((check) => check === 2) &&
//    data.X.some((check) => check === 3)) ||
//    (data.X.some((check) => check === 4) &&
//      data.X.some((check) => check === 5) &&
//      data.X.some((check) => check === 6)) ||
//    (data.X.some((check) => check === 7) &&
//      data.X.some((check) => check === 8) &&
//      data.X.some((check) => check === 9)) ||
//    (data.X.some((check) => check === 1) &&
//      data.X.some((check) => check === 4) &&
//      data.X.some((check) => check === 7)) ||
//    (data.X.some((check) => check === 2) &&
//      data.X.some((check) => check === 5) &&
//      data.X.some((check) => check === 8)) ||
//    (data.X.some((check) => check === 3) &&
//      data.X.some((check) => check === 6) &&
//      data.X.some((check) => check === 9)) ||
//    (data.X.some((check) => check === 1) &&
//      data.X.some((check) => check === 5) &&
//      data.X.some((check) => check === 9)) ||
//    (data.X.some((check) => check === 3) &&
//      data.X.some((check) => check === 5) &&
//      data.X.some((check) => check === 7));
