"use strict";

function greetChange() {
	let firstName = document.getElementById('fName').value;
	let midInitial = document.getElementById('mName').value;
	let lastName = document.getElementById('lName').value;
	let newGreet = `Welcome, ${firstName} ${midInitial} ${lastName}!`
	document.getElementById('greeting').innerHTML = newGreet;
	
	let result = '';	
	
	for (var i = 1; i <= 140; i++) {
		result += i.toString();
		if (i % 3 != 0 && i % 5 != 0) {
			result += " silk";
		}
		else {
			if (i % 3 == 0) {
				result += " spider";
			}
			if (i % 5 == 0) {
				result += " web";
			}
		}
		result += "<br>";
	}
	
	document.getElementById('output').innerHTML = result;
}