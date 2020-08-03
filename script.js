const cards = [
	{
		card: '2C.png',
		value: 2
	},
	{
		card: '2D.png',
		value: 2
	},
	{
		card: '2H.png',
		value: 2
	},
	{
		card: '2S.png',
		value: 2
	},
	{
		card: '3C.png',
		value: 3
	},
	{
		card: '3D.png',
		value: 3
	},
	{
		card: '3H.png',
		value: 3
	},
	{
		card: '3S.png',
		value: 3
	},
	{
		card: '4C.png',
		value: 4
	},
	{
		card: '4D.png',
		value: 4
	},
	{
		card: '4H.png',
		value: 4
	},
	{
		card: '4S.png',
		value: 4
	},
	{
		card: '5C.png',
		value: 5
	},
	{
		card: '5D.png',
		value: 5
	},
	{
		card: '5H.png',
		value: 5
	},
	{
		card: '5S.png',
		value: 5
	},
	{
		card: '6C.png',
		value: 6
	},
	{
		card: '6D.png',
		value: 6
	},
	{
		card: '6H.png',
		value: 6
	},
	{
		card: '6S.png',
		value: 6
	},
	{
		card: '7C.png',
		value: 7
	},
	{
		card: '7D.png',
		value: 7
	},
	{
		card: '7H.png',
		value: 7
	},
	{
		card: '7S.png',
		value: 7
	},
	{
		card: '8C.png',
		value: 8
	},
	{
		card: '8D.png',
		value: 8
	},
	{
		card: '8H.png',
		value: 8
	},
	{
		card: '8S.png',
		value: 8
	},
	{
		card: '9C.png',
		value: 9
	},
	{
		card: '9D.png',
		value: 9
	},
	{
		card: '9H.png',
		value: 9
	},
	{
		card: '9S.png',
		value: 9
	},
	{
		card: '10C.png',
		value: 10
	},
	{
		card: '10D.png',
		value: 10
	},
	{
		card: '10H.png',
		value: 10
	},
	{
		card: '10S.png',
		value: 10
	},
	{
		card: 'AC1.png',
		value: 1
	},
	{
		card: 'AD1.png',
		value: 1
	},
	{
		card: 'AH1.png',
		value: 1
	},
	{
		card: 'AS1.png',
		value: 1
	}
];
// initialized variables
let playerRandomCard1 = [];
let playerRandomCard2 = [];
let playerRandomCard3 = [];
let compRandomCard1 = [];
let compRandomCard2 = [];
let compRandomCard3 = [];

let totalPlayerBet = 0;
let totalCompBet = 0;
let totalBets;

let compRandomCount = 0;
let playerRandomCount = 0;
let playerTotalMoney = 10000;
let compTotalMoney = 10000;
let playerCard3Val = 0;
let compCard3Val = 0;
let comCardTotalVal = 0;
let playerCardTotalVal = 0;
// initialized constant variables
const compCard1 = document.querySelector('#compCards .card1 img');
const compCard2 = document.querySelector('#compCards .card2 img');
const compCard3 = document.querySelector('#compCards .card3 img');
const playerCard1 = document.querySelector('#playerCards .card1 img');
const playerCard2 = document.querySelector('#playerCards .card2 img');
const playerCard3 = document.querySelector('#playerCards .card3 img');
const computerBet = document.querySelector('#computerBet p');
const playerBet = document.querySelector('#playerBet p');
const betPhase = document.querySelector('#bettingPhase');
const drawBtn = document.querySelector('#draw');
const hiritBtn = document.querySelector('#hirit');
const betBtns = document.querySelectorAll('.betBtns');
const confirmBtn = document.querySelector('#confirmBtn');
const betTotal = document.querySelector('#betTotal');
const playerMoney = document.querySelector('#moneyContainer p');
const msg = document.querySelector('#innerContainer h2');
const collectedBets = document.querySelector('#collectedBets h3');
const compMoney = document.querySelector('#compMoneyContainer p');
const cancelBtn = document.querySelector('#cancelBtn');
const betPhaseCompMoney = document.querySelector('#leftContainer p');
const betPhasePlayerMoney = document.querySelector('#rightContainer p');
const tryAgain = document.querySelector('#tryAgain');
const gameOver = document.querySelector('#gameOver');
const playAgain = document.querySelector('#playAgain');
const youWin = document.querySelector('#youWin');
const instructions = document.querySelector('#instructions');
const startBtn = document.querySelector('#start');
//functions
//updates the html values
let updateHtml1 = function() {
	betPhasePlayerMoney.textContent = playerTotalMoney;
	betPhaseCompMoney.textContent = compTotalMoney;
	betTotal.textContent = totalPlayerBet;
};
//resets and updates the betting phase
let reset1 = function() {
	playerTotalMoney += totalPlayerBet;
	compTotalMoney += totalCompBet;
	totalPlayerBet = 0;
	totalCompBet = 0;
	betTotal.textContent = 0;
	updateHtml1();
};
//shows initial cards
let showCardsPlayer = function() {
	playerCard1.src = `images/${playerRandomCard1[0].card}`;
	playerCard2.src = `images/${playerRandomCard2[0].card}`;
};
//randomize 3rd cards
let randomize2 = function() {
	cards.forEach(function(card, i) {
		let randomNum3 = Math.floor(Math.random() * cards.length);
		let randomNum6 = Math.floor(Math.random() * cards.length);
		playerRandomCard3.push(cards[randomNum3]);
		compRandomCard3.push(cards[randomNum6]);
	});
};
//radomize the initial cards
let randomize = function() {
	cards.forEach(function(card, i) {
		if (compRandomCount < 1 && playerRandomCount < 1) {
			let randomNum1 = Math.floor(Math.random() * cards.length);
			let randomNum2 = Math.floor(Math.random() * cards.length);
			let randomNum4 = Math.floor(Math.random() * cards.length);
			let randomNum5 = Math.floor(Math.random() * cards.length);
			compRandomCount++;
			playerRandomCount++;
			playerRandomCard1.push(cards[randomNum1]);
			playerRandomCard2.push(cards[randomNum2]);
			compRandomCard1.push(cards[randomNum4]);
			compRandomCard2.push(cards[randomNum5]);
		}
	});
};
//resets table for another round
let resetTable = function() {
	setTimeout(function() {
		totalPlayerBet = 0;
		totalCompBet = 0;
		playerRandomCard1 = [];
		playerRandomCard2 = [];
		playerRandomCard3 = [];
		compRandomCard1 = [];
		compRandomCard2 = [];
		compRandomCard3 = [];
		playerCard1.src = `images/red_back.png`;
		playerCard2.src = `images/red_back.png`;
		playerCard3.src = `images/red_back.png`;
		compCard1.src = `images/red_back.png`;
		compCard2.src = `images/red_back.png`;
		compCard3.src = `images/red_back.png`;
		playerCard3.style.display = 'none';
		betPhase.style.display = 'flex';
		compRandomCount = 0;
		playerRandomCount = 0;
		betTotal.textContent = 0;
		comCardTotalVal = 0;
		playerCardTotalVal = 0;
		console.log(hitBtnCheck);
		randomize();
		updateHtml1();
	}, 1500);
};
//hirit button
let hitBtnCheck = false;
hiritBtn.addEventListener('click', function() {
	randomize2();
	hitBtnCheck = true;
	playerCard3.style.display = 'block';
	playerCard3.src = `images/${playerRandomCard3[0].card}`;
	console.log(hitBtnCheck);
});
//bet buttons
betBtns.forEach(function(bet, i) {
	betBtns[i].addEventListener('click', function() {
		if (playerTotalMoney >= bet.textContent || compTotalMoney >= bet.textContent) {
			if (playerTotalMoney < bet.textContent) {
				msg.style.color = 'red';
				msg.style.fontSize = '1.8em';
				msg.textContent = 'You do not have enough money';
			} else if (compTotalMoney < bet.textContent) {
				msg.style.color = 'red';
				msg.style.fontSize = '1.8em';
				msg.textContent = 'Computer does not have enough money';
			} else {
				totalPlayerBet += parseInt(bet.textContent);
				playerTotalMoney -= parseInt(bet.textContent);
				totalCompBet += parseInt(bet.textContent);
				compTotalMoney -= parseInt(bet.textContent);
				updateHtml1();
			}
		}
	});
});
//resets message on betting phase
let resetMsg = function() {
	msg.style.color = 'black';
	msg.style.fontSize = '5em';
	msg.textContent = 'Place a bet';
};
//cancel button
cancelBtn.addEventListener('click', function() {
	reset1();
	resetMsg();
});
//confirm button
confirmBtn.addEventListener('click', function() {
	if (totalPlayerBet > 0) {
		randomize();
		totalBets = totalPlayerBet + totalCompBet;
		collectedBets.textContent = `Total Bets: ${totalBets}`;
		showCardsPlayer();
		playerMoney.textContent = playerTotalMoney;
		compMoney.textContent = compTotalMoney;
		betPhase.style.display = 'none';
		computerBet.textContent = totalCompBet;
		playerBet.textContent = totalPlayerBet;
		resetMsg();
	} else {
		msg.style.color = 'red';
		msg.textContent = 'Place a bet first';
	}
});
//draw button, compares cards of both players
drawBtn.addEventListener('click', function() {
	if (hitBtnCheck == false) {
		comCardTotalVal = (compRandomCard1[0].value + compRandomCard2[0].value) % 10;
		playerCardTotalVal = (playerRandomCard1[0].value + playerRandomCard2[0].value) % 10;
	} else {
		comCardTotalVal = (compRandomCard1[0].value + compRandomCard2[0].value) % 10;
		playerCardTotalVal =
			(playerRandomCard1[0].value + playerRandomCard2[0].value + playerRandomCard3[0].value) % 10;
		hitBtnCheck = false;
	}
	compCard1.src = `images/${compRandomCard1[0].card}`;
	compCard2.src = `images/${compRandomCard2[0].card}`;
	setTimeout(function() {
		if (comCardTotalVal > playerCardTotalVal) {
			alert('You Lose');
			compTotalMoney += totalBets;
			compMoney.textContent = compTotalMoney;
			resetTable();
		} else if (comCardTotalVal == playerCardTotalVal) {
			alert(`It's a draw`);
			compTotalMoney += totalCompBet;
			compMoney.textContent = compTotalMoney;
			playerTotalMoney += totalPlayerBet;
			playerMoney.textContent = playerTotalMoney;
			resetTable();
		} else {
			alert(`You win`);
			playerTotalMoney += totalBets;
			playerMoney.textContent = playerTotalMoney;
			resetTable();
		}
		if (playerTotalMoney <= 0 || compTotalMoney <= 0) {
			if (playerTotalMoney <= 0) {
				gameOver.style.display = 'block';
			} else if (compTotalMoney <= 0) {
				youWin.style.display = 'block';
			}
		}
	}, 1250);
});

tryAgain.addEventListener('click', function() {
	location.reload();
});

playAgain.addEventListener('click', function() {
	location.reload();
});

startBtn.addEventListener('click', function() {
	instructions.style.display = 'none';
});
