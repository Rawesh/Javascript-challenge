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

// result elements
var table = document.getElementById("table");

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

// set values in table
for (i in scores)
{

	console.dir(scores[i]);
	// create alements
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	
	// text in element in var 
	var pNames = document.createTextNode(scores[i].name);
	var pScore = document.createTextNode(scores[i].total);

	// set text in element, element in element
	td.appendChild(pNames);
	tr.appendChild(td);
	// hier moet nog de score van de compare functie komen
	td = document.createElement("td");
	td.className = 'cell';
	td.appendChild(pScore);
	tr.appendChild(td);

	// --------------------
	table.appendChild(tr);
}

function begin()
{
	// set buttons visible
	agree.style.visibility = "visible";
	disagree.style.visibility = "visible";
	skip.style.visibility = "visible";
	non.style.visibility = "visible";
	start.style.visibility = "hidden";

	// set question in header and title
	header.innerHTML = subjects[0].title;
	question.innerHTML = subjects[0].statement;

	//this count num up
	num++;

	//write to console
	console.log(subjects[0].title);
	console.log(subjects[0].statement);
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

function getResult()
{
	result.style.visibility = "hidden";
	table.style.visibility = "visible";

}

