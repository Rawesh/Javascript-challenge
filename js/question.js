// select the elements
var header = document.getElementById("header");
var question = document.getElementById("question");
var agree = document.getElementById("agree");
var disagree = document.getElementById("disagree");
var skip = document.getElementById("skip");
var back = document.getElementById("back");


function skipQuestion()
{
	for (num = 0; num < subjects.length; num++)
	{ 
    	console.log(num);
    	console.log(subjects[num].title);
		console.log(subjects[num].statement);
	}
	// // skip the questions
	// header.innerHTML = subjects[num].title;
	// question.innerHTML = subjects[num].statement;

	// console.log(subjects[num].title);
	// console.log(subjects[num].statement);
	// console.log(num);


	// // end of the questions
	// if (num == 3)
	// {
	// 	header.innerHTML = "Einde"
	// 	question.innerHTML = "U heeft het einde bereikt"

	// 	console.log(header);
	// 	console.log(question);

	// 	agree.style.visibility = "hidden";
	// 	disagree.style.visibility = "hidden";
	// 	skip.style.visibility = "hidden";
	// }
}

function goBack()
{

}

