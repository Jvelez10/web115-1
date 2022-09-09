"use strict";

var welcome = "Welcome to Silk Thread Development!";
var welcome2 = "This short survey will generate an estimated price based on your web development needs."

alert(welcome);
alert(welcome2);

var pricePerPage = 16;
var quotePrompt = "How many web pages do you need made? ";
var priceStr = "$16 per page. $15 if 10 or more.";
var numOfPages = prompt(quotePrompt + priceStr);
if (numOfPages >= 10) {
	pricePerPage--;
}
var estimate = pricePerPage * numOfPages;
var memberEstimate = (pricePerPage * numOfPages) * 0.8;

alert("Your estimated price is $" + estimate + ".");
alert("Join our membership program for a 20% discount, with a pricetag of $" + memberEstimate + " on your order.");