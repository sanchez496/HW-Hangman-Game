var wordList = [
	"accordion",
	"bagpipes",
	"banjo",
	"baritone",
	"bass drum",
	"bassoon",
	"bongos",
	"bugle",
	"gong",
	"piano",
	"guitar",
	"castanets",
	"celeste",
	"cello",
	"chimes",
	"clarinet",
	"claves",
	"piano",
	"piccolo",
	"timbales",
	"snare",
	"violin"
]

var wordSelected = "";
var letters = [];
var blankSpaces = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];


var winCounter = 0;
var lossCounter = 1;
var chances = 9;

function startGame(){

	/* 
	1. select a work at random
	2. brake up selected word into letters
	3. and underscores for each letter to html
	4. guesses will equal 9 and blanksandsuccess is am empty array, wrongguesses is also empty
	*/
	 wrongGuesses = [];
	 chances = 9;
	 blanksAndSuccesses = [];

	

	wordSelected = wordList[Math.floor(Math.random() * wordList.length)];
	letters = wordSelected.split("");
	blankSpaces = letters.length;
	console.log(letters);
	console.log(blankSpaces);

	for(var i=0; i<blankSpaces; i++){
		blanksAndSuccesses.push("_");

		
	}
	console.log(blanksAndSuccesses);
	// console.log("innerHTML");

	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = chances;
	// document.getElementById('wrong-guesses').innerHTML= wrongGuesses.join(" ");
}


function checkLetters(letter){
	/*
	1. Compate the letter the user picks and matches any letters in the word
	2. Need conditional statement that determines if letter exists in word, if so, do something if not then
	3. If user is wrong, decrease numGuesses var by 1
	*/
	var letterInWord = false;

	for(var i = 0; i < blankSpaces; i++){
		if(wordSelected[i] === letter){
			letterInWord = true;
		}
	}
		console.log("figure this out")
	if(letterInWord){
		for(i = 0; i < blankSpaces; i++){
			if(wordSelected[i] === letter){
				blanksAndSuccesses[i] = letter;
				// console.log("letterInWord");
			}
		}
	}	
	else{
			chances --; 
			wrongGuesses.push(letter)
			}
	}
	
	// console.log("we are in the checkLetters function", letters)
	// youtube 1:18:00//


function roundComplete(){
	/*
	1. will update the HTML with letters that are in selected word
	2. will update HTML with guesses we have left
	3. will update the html to show wrong guesses
	4. determine if user won or lost game
	*/
	
	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = chances;
		console.log ("guesses left");
	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

	// document.getElementById('wrong-guesses').innerHTML.toUpperCase();

	if(letters.join(" ") === blanksAndSuccesses.join(" ")){
		winCounter++;
		alert("YOU WIN!");
		document.getElementById('win-counter').innerHTML = winCounter;
		startGame();
	}else if(chances === 0){
		document.getElementById('lossCounter').innerHTML = lossCounter ++;
		document.getElementById('wrong-guesses').innerHTML = "";
		alert("Too many wrong guesses, and now you must pay the price MUUUUAAAHAHAHAHAHAHAHAHAHAHAHAH");
		startGame();
	}

}

startGame();
alert("Please select a letter to begin the game! If you reach 8 wrong guess you will lose...BIGTIME");
document.onkeyup = function(event){
	/*
	1. will accept letter keyed in
	2. will pass through checkLetters function
	*/
	var lettersPicked = String.fromCharCode(event.keyCode).toLowerCase();
	// console.log("this is the letter we picked", lettersPicked);
	checkLetters(lettersPicked)
	roundComplete();
}

