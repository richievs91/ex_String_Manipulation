var testString = "";
var input = document.getElementById("input");
var stringBtn = document.getElementById("stringBtn");
var reverse = document.getElementById("reversed");
var alpha = document.getElementById("alphabetical");
var pal = document.getElementById("palindrome");



/*Implement the logic in the reversal function that reverses the order 
of the characters in the string, and outputs the result in the DOM, 
below the text input.*/


function reversal(testString) {
	testString = input.value;
	var newString = testString.split("").reverse().join("");
	return reverse.innerHTML = newString;
}


/*Implement the logic in the alphabits function that return the characters 
in alphabetical order, and outputs the result in the DOM, below the 
text input.*/

function alphabits(testString) {
	testString = input.value;
	var newString = testString.split("").sort().join("");
	return alpha.innerHTML = newString;
}


/*
Implement the logic in the palindrome function that determine whether 
he string is a palindrome. If it is, display the text "Your string is 
a palidrome" in the DOM, below the text input.*/

function palindrome(testString) {
	testString = input.value;
	var paliString = testString.split("").reverse().join("");
	if (paliString === testString) {
		pal.innerHTML = "Your string is a palindrome";
	} else pal.innerHTML = "Your string is not a palindrome";
}


stringBtn.addEventListener("click", alphabits);
stringBtn.addEventListener("click", reversal);
stringBtn.addEventListener("click", palindrome);









