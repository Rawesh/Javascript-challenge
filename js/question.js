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
var aside = document.getElementById("aside");
var aside1 = document.getElementById("aside1");
var result = document.getElementById("result");
var match = document.getElementById("resultButton");

// result elements
var table = document.getElementById("table");
var table2 = document.getElementById("table2");

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


function filterParties()
{
	resultButton.style.visibility = "hidden";
	table2.style.visibility = "visible";
	aside1.style.visibility = "visible";

	var cells = document.getElementsByClassName('cell');
	var filter = 1;

	// get only the selected parties		
		showResult(filter);
}

function getResult()
{
	var cells = document.getElementsByClassName('cell');
	var filter = 0;

	//make visible
	table.style.visibility = "visible";
	result.style.visibility = "hidden"
	aside.style.visibility = "visible";
	
	// get result of all parties
	showResult(filter);

}





