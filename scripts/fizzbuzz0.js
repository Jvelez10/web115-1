"use strict";

function greetChange() {
	let firstName = document.getElementById('fName').value;
	let midInitial = document.getElementById('mName').value;
	let lastName = document.getElementById('lName').value;
	let newGreet = `Welcome, ${firstName} ${midInitial} ${lastName}!`
	document.getElementById('greeting').innerHTML = newGreet;
}