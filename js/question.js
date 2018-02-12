// select the elements
var fieldset = document.getElementById("fieldset");
var header = document.getElementById("header");
var question = document.getElementById("question");
var send = document.getElementById("send");
var aside = document.getElementById("aside");
var footer = document.getElementById("footer");

//buttons
var agree = document.getElementById("agree");
var disagree = document.getElementById("disagree");
var skip = document.getElementById("skip");
var back = document.getElementById("back");
var start = document.getElementById("start");
var non = document.getElementById("non");
var result = document.getElementById("result");
var match = document.getElementById("resultButton");
var showExplanation = document.getElementById("showExplanation");

//value in number
var number = document.getElementById("number");


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
	//show the explanation button
	showExplanation.style.visibility = "visible";	

	num++;

	// set buttons visible
	agree.style.visibility = "visible";
	disagree.style.visibility = "visible";
	skip.style.visibility = "visible";
	non.style.visibility = "visible";
	send.style.visibility = "visible";
	number.style.visibility = "visible";
	showExplanation.style.visibility = "visible";
	start.style.display = "none";

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;


	//this count num up
	

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(num);
}

function showPartyExplanation()
{
	footer.style.visibility = "visible";

	var name = "";
	var explanation = "";
	for (var i = 0; i < subjects[num].parties.length; i++)
	{
		name = "<h3>" + subjects[num].parties[i].name + "</h3>";
		explanation = "<p>" + subjects[num].parties[i].explanation + "</p>";
		setName = document.getElementById("subject").innerHTML += name;
		setName = document.getElementById("subject").innerHTML += explanation;
	}
}

function skipQuestion()
{
	footer.style.visibility = "hidden";

	//delete prev explanation
	document.getElementById("subject").innerHTML = "";
	
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
	footer.style.visibility = "hidden";

	//delete prev explanation
	document.getElementById("subject").innerHTML = "";

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
	footer.style.visibility = "hidden";

	//delete prev explanation
	document.getElementById("subject").innerHTML = "";

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
	footer.style.visibility = "hidden";

	//delete prev explanation
	document.getElementById("subject").innerHTML = ""

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
	footer.style.visibility = "hidden";

	//delete prev explanation
	document.getElementById("subject").innerHTML = "";

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
	result2.style.visibility = "visible";
	resultButton.style.visibility = "visible";
	resultButton1.style.visibility = "visible";
	result.style.visibility = "hidden";

	document.getElementById("block").style.display = "none";

	header.innerHTML = "Alle partijen";
	question.innerHTML = "Dit is de overzicht van alle partijen." + "<br>" + "De blauwe partij namen zijn de partijen die gefilterd zijn.";
}








