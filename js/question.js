// select the elements
var header = document.getElementById("header");
var question = document.getElementById("question");
var agree = document.getElementById("agree");
var disagree = document.getElementById("disagree");
var skip = document.getElementById("skip");
var back = document.getElementById("back");
var start = document.getElementById("start");

// array vote
var vote = ["Eens", "Oneens", "Overgeslagen"];

// set value of num -1
num = 0 -1;

function begin()
{
	// set buttons visible
	agree.style.visibility = "visible";
	disagree.style.visibility = "visible";
	skip.style.visibility = "visible";
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
	// set question on value array 2
	var subject = subjects[num];
	subject = vote[2];

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
	console.log(subject);
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

function setAgree()
{
	// set question on value array 0
	var subject = subjects[num];
	subject = vote[0];

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
	console.log(subject);
	console.log(num);
}

function setDisAgree()
{
	// set question on value array 1
	var subject = subjects[num];
	subject = vote[1];

	num++;

	// set question in header and title
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	//make buttons visible if needed
	buttonAttr();

	//write to console
	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(subject);
	console.log(num);
}

