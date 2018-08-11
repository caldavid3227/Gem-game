window.onload = function(){
const minNum = 19;
const maxNum = 120;
const minGem = 1;
const maxGem = 12;
let randGem = Math.floor(Math.random() * (maxGem + 1) + minGem);
let wins = [];
let losses = [];
let randNum = Math.floor(Math.random() * (maxNum + 1) + (minNum));
let gemTotal = [];
const btn = document.querySelector('input');


$(function updateGemTotal(){
	$(".score").text(randGem)
});

btn.addEventListener('Click', updateGemTotal);

$( ".randomNumber" ).text( "helloo!" );


console.log(randNum);



$('#container').click(function() {
	Math.floor(math.random() * (maxGem + 1) + (minGem));
	$('.score').text(randGem);
});

};