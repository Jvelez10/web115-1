"use strict";

function greetChange() {
	let firstName = document.getElementById('fName').value;
	let midInitial = document.getElementById('mName').value;
	let lastName = document.getElementById('lName').value;
	let newGreet = `Welcome, ${firstName} ${midInitial} ${lastName}!`
	document.getElementById('greeting').innerHTML = newGreet;
	
	let result = '';	
	
	const firstDiv = 3;
	const secondDiv = 5;
	
	for (var i = 1; i <= 140; i++) {
		result += i.toString();
		if (!evenDiv(i, firstDiv) && !evenDiv(i, secondDiv)) {
			result += " silk";
		}
		else {
			if (evenDiv(i, firstDiv)) {
				result += " spider";
			}
			if (evenDiv(i, secondDiv)) {
				result += " web";
			}
		}
		result += "<br>";
	}
	
	document.getElementById('output').innerHTML = result;
}

function evenDiv(num1, num2) {
	return (num1 % num2 == 0 ? true : false);
}