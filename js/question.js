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
var rh = document.getElementById("result_header");
var rq = document.getElementById("result_question");
var rv = document.getElementById("result_vote");

for (var i = 0; i < subjects.length; i++)
{	console.log(subjects[i]);
	for (parties in subjects[i].parties)
	{
		console.log(subjects[i].parties[parties]);
	}	
}

// arrays
var num = -1;
var choises = [];

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
	var choise = choises[num] = 'Geen van beide';

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
	var choise = choises[num] = 'Eens';

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
	var choise = choises[num] = 'Oneens';

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

