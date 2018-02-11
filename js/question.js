// select the elements
// content
var header = document.getElementById("header");
var question = document.getElementById("question");

//buttons
var agree = document.getElementById("agree");
var disagree = document.getElementById("disagree");
var skip = document.getElementById("skip");
var back = document.getElementById("back");
var start = document.getElementById("start");
var non = document.getElementById("non");
var result = document.getElementById("result");
var match = document.getElementById("resultButton");

//elements
var aside = document.getElementById("aside");


// arrays
var num = -1;
var choises = [];

var scores = [
	{name: "VVD", total: 0},
	{name: "CDA", total: 0},
	{name: "PVV", total: 0},
	{name: "D66", total: 0},
	{name: "GroenLinks", total: 0},
	{name: "SP", total: 0},
	{name: "PvdA", total: 0},
	{name: "ChristenUnie", total: 0},
	{name: "Partij voor de Dieren", total: 0},
	{name: "SGP", total: 0},
	{name: "DENK", total: 0},
	{name: "Forum voor Democratie", total: 0},
	{name: "OndernemersPartij", total: 0},
	{name: "VNL", total: 0},
	{name: "Nieuwe Wegen", total: 0},
	{name: "De Burger Beweging", total: 0},
	{name: "Piratenpartij", total: 0},
	{name: "Artikel 1", total: 0},
	{name: "50plus", total: 0},
	{name: "Libertarische Partij", total: 0}
];

function begin()
{	
	num++;

	// set buttons visible
	agree.style.visibility = "visible";
	disagree.style.visibility = "visible";
	skip.style.visibility = "visible";
	non.style.visibility = "visible";
	start.style.visibility = "hidden";

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;


	//this count num up
	

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(num);
}

function skipQuestion()
{
	//this count num up
	num++;

	//make buttons visible if needed
	buttonAttr();

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(num);
}

// one question back
function goBack()
{
	for( i in scores)
	{
		if (scores[i].total > 0)
		{		
			scores[i].total -= 1;
			console.log(scores[i].name, scores[i].total);
		}		
	}
	// this count num down
	var countDown = --num;

	// make button visible ony when needed
	if (countDown > 0)
	{
		back.style.visibility = "visible";
	}
	else
	{
		back.style.visibility = "hidden";	
	}

	// set question in header and title
	header.innerHTML = subjects[countDown].title;
	question.innerHTML = subjects[countDown].statement;

	//write to console
	console.log(countDown);
	console.log(header);
	console.log(question);
}

function setNon()
{
	var choise = choises[num] = 'ambivalent';
	compare(choise, num);


	//this count num up
	num++;

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	//make buttons visible if needed
	buttonAttr();

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(choise);
	console.log(num);
}

function setAgree()
{	
	var choise = choises[num] = 'pro';
	compare(choise, num);
	//this count num up
	num++;

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	//make buttons visible if needed
	buttonAttr();

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(choise);
	console.log(num);
}

function setDisAgree()
{
	var choise = choises[num] ='contra';
	compare(choise, num);

	num++;

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	//make buttons visible if needed
	buttonAttr();

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(choise);
	console.log(num);
}


function filterScores()
{
	var nText = "";
	var sText = "";

	for (var i = 0; i < scores.length; i++) 
	{
		if (scores[i].total > 0)
		{
			console.log(scores[i].name, scores[i].total);
			nText += scores[i].name + "<br>";
			sText += scores[i].total + "<br>";
		}

	}

	//set option list
	var name = document.getElementById("name").innerHTML = nText;
	var score = document.getElementById("score").innerHTML = sText;
	document.getElementById("result2").style.visibility = "visible";
	result.style.visibility = "hidden";

	//description
	header.innerHTML = "Gematchte Partijen";
	question.innerHTML = "Dit zijn de partijen die matchen met jou stemmen.";
}

function filterParties()
{
	var nText = "";
	var sText = "";

	for (var i = 0; i < scores.length; i++) 
	{
		if (scores[i].name === "VVD" || scores[i].name === "PVV" || scores[i].name === "CDA" || scores[i].name === "D66" || scores[i].name === "GroenLinks"
			|| scores[i].name === "SP")
		{
			console.log(scores[i].name, scores[i].total);
			nText += scores[i].name + "<br>";
			sText += scores[i].total + "<br>";
		}

	}
	//set option list
	var name = document.getElementById("name").innerHTML = nText;
	var score = document.getElementById("score").innerHTML = sText;
	document.getElementById("result2").style.visibility = "visible";

	//description
	header.innerHTML = "Grote partijen";
	question.innerHTML = "Dit zijn de partijen met de meeste zetels.";
}

function getResult()
{
	var nText = "";
	var sText = "";

	for (var i = 0; i < scores.length; i++) 
	{
		console.log(scores[i].name, scores[i].total);
		nText += scores[i].name + "<br>";
		sText += scores[i].total + "<br>";
	}

	var name = document.getElementById("name").innerHTML = nText;
	var score = document.getElementById("score").innerHTML = sText;

	//make the buttons visible
	aside.style.visibility = "visible";
	result.style.visibility = "hidden";
	result2.style.visibility = "visible";
	resultButton.style.visibility = "visible";
	resultButton1.style.visibility = "visible";

	header.innerHTML = "Alle partijen";
	question.innerHTML = "Dit is de overzicht van alle partijen.";
}





