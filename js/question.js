// select the elements
var header = document.getElementById("header");
var question = document.getElementById("question");
var agree = document.getElementById("agree");
var disagree = document.getElementById("disagree");
var skip = document.getElementById("skip");
var back = document.getElementById("back");


num = 0 -1;

function start()
{
	// set buttons visible
	agree.style.visibility = "visible";
	disagree.style.visibility = "visible";
	skip.style.visibility = "visible";

	skipQuestion();
}

function skipQuestion()
{
	num++;
	skip.innerHTML = "Sla over";

	// make button visible only when needed
	if (num > 0 && num < 3)
	{
		back.style.visibility = "visible";
	}
	else if (num == 3)
	{
		console.log(header);
		console.log(question);

		agree.style.visibility = "hidden";
		disagree.style.visibility = "hidden";
		skip.style.visibility = "hidden";
		back.style.visibility = "hidden";
	}
	else
	{
		back.style.visibility = "hidden";	
	}

	// skip the questions
	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	console.log(subjects[num].title);
	console.log(subjects[num].statement);
	console.log(num);
}

// one question back
function goBack()
{
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

	header.innerHTML = subjects[countDown].title;
	question.innerHTML = subjects[countDown].statement;

	console.log(countDown);
	console.log(header);
	console.log(question);
}

function setAgree()
{
	var subject = subjects[num];
	subject = true;

	console.log(subject);
	console.log(num);
	num++;

	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	// make button visible only when needed
	if (num > 0 && num < 3)
	{
		back.style.visibility = "visible";
	}
	else if (num == 3)
	{
		console.log(header);
		console.log(question);

		agree.style.visibility = "hidden";
		disagree.style.visibility = "hidden";
		skip.style.visibility = "hidden";
		back.style.visibility = "hidden";
	}
	else
	{
		back.style.visibility = "hidden";	
	}
}

function setDisAgree()
{
	var subject = subjects[num];
	subject = false;

	console.log(subject);
	console.log(num);
	num++;

	header.innerHTML = subjects[num].title;
	question.innerHTML = subjects[num].statement;

	// make button visible only when needed
	if (num > 0 && num < 3)
	{
		back.style.visibility = "visible";
	}
	else if (num == 3)
	{
		console.log(header);
		console.log(question);

		agree.style.visibility = "hidden";
		disagree.style.visibility = "hidden";
		skip.style.visibility = "hidden";
		back.style.visibility = "hidden";
	}
	else
	{
		back.style.visibility = "hidden";	
	}
}

