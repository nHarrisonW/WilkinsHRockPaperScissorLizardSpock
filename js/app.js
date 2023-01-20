// All buttons
let Button1 = document.getElementById('Button1');
let Button2 = document.getElementById('Button2');
let bigButton = document.getElementsByClassName('bigButton');

let BestOf1Button = document.getElementById('BestOf1Button');
let BestOf5Button = document.getElementById('BestOf5Button');
let BestOf7Button = document.getElementById('BestOf7Button');
let seriesBtn = document.getElementsByClassName('seriesButtons');

let ButtonRock = document.getElementById('ButtonRock');
let ButtonPaper = document.getElementById('ButtonPaper');
let ButtonScissors = document.getElementById('ButtonScissors');
let ButtonLizard = document.getElementById('ButtonLizard');
let ButtonSpock = document.getElementById('ButtonSpock');
let gameButtons = document.getElementsByClassName('gameButtons');

// Top row (title)
let titleText = document.getElementById('titleText');
let scoreText = document.getElementById('scoreText');

// Middle row (select mode, series, player choose)
let selectRow = document.getElementById('selectRow');
let selectText = document.getElementById('selectText');
let seriesText = document.getElementById('seriesText');
let player1Text = document.getElementById('player1Text');
let player2Text = document.getElementById('player2Text');

// Footer
let FooterText = document.getElementById('FooterText');
let FooterName = document.getElementById('FooterName');
let FooterLink = document.getElementById('FooterLink');
let RulesText = document.getElementById('RulesText');

// In Game
let GameLength = 0;
let RoundNumber = 0;
let Player1Score = 0;
let Player2Score = 0;
let CompScore = 0;

let Player1Choice = '';
let Player2Choice = '';
let CompChoice = '';


// Select a mode
Button1.addEventListener('click', function () {
    Button1.classList.add('hide-element');
    Button2.classList.add('hide-element');

    BestOf1Button.classList.remove('hide-element');
    BestOf5Button.classList.remove('hide-element');
    BestOf7Button.classList.remove('hide-element');

    selectText.classList.add('hide-element');
    seriesText.classList.remove('hide-element');

    FooterText.classList.add('hide-element');
    FooterName.classList.add('hide-element');
    FooterLink.classList.add('hide-element');
    RulesText.classList.remove('hide-element');
})
// 2 player mode
Button2.addEventListener('click', function () {
    Button1.classList.add('hide-element');
    Button2.classList.add('hide-element');

    BestOf1Button.classList.remove('hide-element');
    BestOf5Button.classList.remove('hide-element');
    BestOf7Button.classList.remove('hide-element');

    selectText.classList.add('hide-element');
    seriesText.classList.remove('hide-element');

    FooterText.classList.add('hide-element');
    FooterName.classList.add('hide-element');
    FooterLink.classList.add('hide-element');
    RulesText.classList.remove('hide-element');
})


// Select a series length
BestOf1Button.addEventListener('click', function () {
    CallCompApi();

    titleText.classList.add('hide-element');
    scoreText.classList.remove('hide-element');

    
    BestOf1Button.classList.add('hide-element');
    BestOf5Button.classList.add('hide-element');
    BestOf7Button.classList.add('hide-element');
    
    ButtonRock.classList.remove('hide-element');
    ButtonPaper.classList.remove('hide-element');
    ButtonScissors.classList.remove('hide-element');
    ButtonLizard.classList.remove('hide-element');
    ButtonSpock.classList.remove('hide-element');
    
    
    seriesText.classList.add('hide-element');
    player1Text.classList.remove('hide-element');

    GameLength = 1;
    
})
BestOf5Button.addEventListener('click', function () {
    CallCompApi();
    titleText.classList.add('hide-element');
    scoreText.classList.remove('hide-element');

    BestOf1Button.classList.add('hide-element');
    BestOf5Button.classList.add('hide-element');
    BestOf7Button.classList.add('hide-element');
    
    ButtonRock.classList.remove('hide-element');
    ButtonPaper.classList.remove('hide-element');
    ButtonScissors.classList.remove('hide-element');
    ButtonLizard.classList.remove('hide-element');
    ButtonSpock.classList.remove('hide-element');
    
    seriesText.classList.add('hide-element');
    player1Text.classList.remove('hide-element');
    
    GameLength = 3;

})
BestOf7Button.addEventListener('click', function () {
    CallCompApi();
    titleText.classList.add('hide-element');
    scoreText.classList.remove('hide-element');

    
    BestOf1Button.classList.add('hide-element');
    BestOf5Button.classList.add('hide-element');
    BestOf7Button.classList.add('hide-element');
    
    ButtonRock.classList.remove('hide-element');
    ButtonPaper.classList.remove('hide-element');
    ButtonScissors.classList.remove('hide-element');
    ButtonLizard.classList.remove('hide-element');
    ButtonSpock.classList.remove('hide-element');
    
    
    seriesText.classList.add('hide-element');
    player1Text.classList.remove('hide-element');

    GameLength = 4;
    
})
function CallCompApi(){
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(
        response => response.text()
    ).then(
        data => {
            CompChoice = data;
        }
    );
}
ButtonRock.addEventListener('click', function () {
    RoundNumber++;
    CallCompApi();
    Player1Choice = 'Rock';
    if (CompChoice === 'Scissors' || CompChoice === 'Lizard') {
        Player1Score++;
    }
    else if (CompChoice === 'Spock' || CompChoice === 'Paper') {
        CompScore++;
    }
    scoreText.textContent = 'Score:' + Player1Score + '-' + CompScore;
    if (GameLength === Player1Score) {
        player1Text.textContent = 'Player 1 Wins!';
    }else if (GameLength === CompScore) {
        player1Text.textContent = 'You Lose!';
    }
})
ButtonPaper.addEventListener('click', function () {
    RoundNumber++;
    CallCompApi();
    Player1Choice = 'Paper';
    if (CompChoice === 'Rock' || CompChoice === 'Spock') {
        Player1Score++;
    }
    else if (CompChoice === 'Lizard' || CompChoice === 'Scissors') {
        CompScore++;
    }
    scoreText.textContent = 'Score:' + Player1Score + '-' + CompScore;
    if (GameLength === Player1Score) {
        player1Text.textContent = 'Player 1 Wins!';
    }else if (GameLength === CompScore) {
        player1Text.textContent = 'You Lose!';
    }
})
ButtonScissors.addEventListener('click', function () {
    RoundNumber++;
    CallCompApi();
    Player1Choice = 'Scissors';
    if (CompChoice === 'Lizard' || CompChoice === 'Paper') {
        Player1Score++;
    }
    else if (CompChoice === 'Spock' || CompChoice === 'Rock') {
        CompScore++;
    }
    scoreText.textContent = 'Score:' + Player1Score + '-' + CompScore;
    if (GameLength === Player1Score) {
        player1Text.textContent = 'Player 1 Wins!';
    }else if (GameLength === CompScore) {
        player1Text.textContent = 'You Lose!';
    }
})
ButtonLizard.addEventListener('click', function () {
    RoundNumber++;
    CallCompApi();
    Player1Choice = 'Lizard';
    if (CompChoice === 'Paper' || CompChoice === 'Spock') {
        Player1Score++;
    }
    else if (CompChoice === 'Rock' || CompChoice === 'Scissors') {
        CompScore++;
    }
    scoreText.textContent = 'Score:' + Player1Score + '-' + CompScore;
    if (GameLength === Player1Score) {
        player1Text.textContent = 'Player 1 Wins!';
    }else if (GameLength === CompScore) {
        player1Text.textContent = 'You Lose!';
    }
})
ButtonSpock.addEventListener('click', function () {
    RoundNumber++;
    CallCompApi();
    Player1Choice = 'Spock';
    if (CompChoice === 'Scissors' || CompChoice === 'Rock') {
        Player1Score++;
    }
    else if (CompChoice === 'Lizard' || CompChoice === 'Paper') {
        CompScore++;
    }
    scoreText.textContent = 'Score:' + Player1Score + '-' + CompScore;
    if (GameLength === Player1Score) {
        player1Text.textContent = 'Player 1 Wins!';
    }else if (GameLength === CompScore) {
        player1Text.textContent = 'You Lose!';
    }
})
// For 2 player mode
// document.getElementById('selectRow').style.backgroundColor = '#12373D'