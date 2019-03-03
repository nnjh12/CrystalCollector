////// STEP0. Define variables
var currentNumber = 0;
var targetNumber;
var win = 0;
var lose = 0;


///// STEP1. Generate the random target number
// generate random target number between 19 - 120
targetNumber = Math.floor(Math.random() * 102 + 19);
console.log("target number: " + targetNumber);


///// STEP2. Generate the random number for each crystal
// make four unique random number between 1 - 12 
var arrOfCrystalNumber = [];
while (arrOfCrystalNumber.length < 4) {
    var i = Math.floor(Math.random() * 12 + 1);
    if (arrOfCrystalNumber.indexOf(i) === -1) arrOfCrystalNumber.push(i);
}
console.log(arrOfCrystalNumber);

// assign random number to each crystal
var garnetNumber = arrOfCrystalNumber[0];
var peridotNumber = arrOfCrystalNumber[1];
var citrineNumber = arrOfCrystalNumber[2];
var topazNumber = arrOfCrystalNumber[3];


///// STEP3. On click event
// when user click the start button
$("#start_button").on("click", function () {
    // remove instruction
    $(".instructoin").empty();

    // write target number & current number into html
    $("#target_number").html(targetNumber);
    $("#current_number").html(currentNumber);
})

// when user click the restart button
$("#restart_button").on("click", function () {
    // win & lose = 0
    win = 0;
    lose = 0;

    // update the win & lose in html
    $("#win").html("Win: " + win);
    $("#lose").html("Lose: " + lose);

    //new game
    newGame()
})

// when user click the crystal,
function crystalClick(id, index) {
    $(id).on("click", function () {

        // increase current number as much as the number of each crystal have
        currentNumber = currentNumber + arrOfCrystalNumber[index];
        console.log("current number: " + currentNumber);

        // update current number in HTML
        $("#current_number").html(currentNumber);

        // if current number === target number, win ++, update in HTML, new game
        if (currentNumber === targetNumber) {
            win++;
            $("#win").html("Win: " + win);
            console.log("win: " + win)
            newGame()
        }

        // if current number > random number, lose ++, update in HTML, new game
        if (currentNumber > targetNumber) {
            lose++;
            $("#lose").html("Lose: " + lose);
            console.log("lose: " + lose)
            newGame()

        }
    })
}

crystalClick("#garnet", 0);
crystalClick("#peridot", 1);
crystalClick("#citrine", 2);
crystalClick("#topaz", 3);


///// SETP4. New Game
function newGame() {
    // Generate new random target number between 19 - 120
    targetNumber = Math.floor(Math.random() * 102 + 19);
    console.log("target number: " + targetNumber);

    // update target number into html
    $("#target_number").html(targetNumber);

    // Generate new four unique random for each crystal between 1 - 12
    arrOfCrystalNumber = []
    while (arrOfCrystalNumber.length < 4) {
        var i = Math.floor(Math.random() * 12 + 1);
        if (arrOfCrystalNumber.indexOf(i) === -1) arrOfCrystalNumber.push(i);
    }
    console.log(arrOfCrystalNumber);

    // update current number to 0 and update into html
    currentNumber = 0
    $("#current_number").html(currentNumber);
}
