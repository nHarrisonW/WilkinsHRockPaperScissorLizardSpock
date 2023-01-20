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
    titleText.classList.add('hide-element');
    scoreText.classList.remove('hide-elements');

    
    BestOf1Button.classList.add('hide-element');
    BestOf5Button.classList.add('hide-element');
    BestOf7Button.classList.add('hide-element');
    
    ButtonRock.classList.remove('hide-elements');
    ButtonPaper.classList.remove('hide-elements');
    ButtonScissors.classList.remove('hide-elements');
    ButtonLizard.classList.remove('hide-elements');
    ButtonSpock.classList.remove('hide-elements');
    
    
    seriesText.classList.add('hide-element');
    player1Text.classList.remove('hide-elements');

})


// In-Game