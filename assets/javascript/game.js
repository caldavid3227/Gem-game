const minNum = 19;
const maxNum = 120;
const minGem = 1;
const maxGem = 12;
let btn1 = Math.floor(Math.random() * (maxGem + 1) + minGem);
let btn2 = Math.floor(Math.random() * (maxGem + 1) + minGem);
let btn3 = Math.floor(Math.random() * (maxGem + 1) + minGem);
let btn4 = Math.floor(Math.random() * (maxGem + 1) + minGem); 
let wins = 0;
let losses = 0;
let total = 0;

function addToTotal(value){
	var newValue;
		
	switch(value){
		case "1": 
			newValue = btn1;						
			break;
		case "2": 
			newValue = btn2;
			break;
		case "3":
		newValue = btn3;
			break;
		case "4": 
			newValue = btn4;
			break;				 
	}
			
	total = parseInt($(".score").text());

	if (isNaN(total)) {
		total = 0; 
	}

	total = total + newValue;

	$(".score").text(total);
		
	console.log(newValue);
	console.log(total);
};

$(document).ready(function(){
function gameStart(){
		let randNum = Math.floor(Math.random() * (maxNum + 1) + (minNum));
	
		const btn = document.querySelector('input');

		$( ".randomNumber" ).text( randNum );

		console.log(randNum);

		$('#container').click(function() {
			$('.score').text(randGem);
		});

		if(total == randNum){
			alert('You win!');
			wins + 1;
		}
		else if(total > randNum){
			alert('You lose!')
			losses + 1
		};
	};
gameStart();
});
