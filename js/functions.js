function buttonAttr()
{
	// if we reach the end, make button and elements that we need visisble or hidden
	if (num > 0 && num < 7)
	{
		back.style.visibility = "visible";
	}
	else if (num == 7)
	{
		console.log(header);
		console.log(question);

		header.innerHTML = "Filters";
		question.innerHTML = "Kies uw filters";

		agree.style.visibility = "hidden";
		disagree.style.visibility = "hidden";
		skip.style.visibility = "hidden";
		back.style.visibility = "hidden";
		non.style.visibility = "hidden";
		showExplanation.style.visibility = "hidden";
		send.style.visibility = "hidden";
		number.style.visibility = "hidden";
		showExplanation.style.visibility = "hidden";

		result.style.visibility = "visible";
		fieldset.style.display = "block";

		//zet filterbuttons in the aside
		var pNames = "";

		for (var i = 0; i < scores.length; i++) 
		{
			pNames += "<button id='btn' value=document.getElementById('btn').innerHTML onclick='show(this)'>" + scores[i].name + "</button>";
		}
			var setName = document.getElementById("parties").innerHTML = pNames;
	}
	else
	{
		back.style.visibility = "hidden";	
	}
}

function compare(choise, num)
{
   // Get array parties.
	for (parties in subjects[num].parties)
	{
		var party = subjects[num].parties[parties].name;
		var vote = subjects[num].parties[parties].position;
		console.log(parseInt(number.value));
		// If my choise is the same as party choise.
		if (choise === vote)
		{   // Get status array.
			for( i in scores)
			{
				var names = scores[i].name;
				var totalScore = scores[i].total;
				// If array score party name is the same as
				// array subject party name.
				if (names === party)
				{
					scores[i].total += parseInt(number.value);
					console.log(names, scores[i].total);					
				}
			}
		}
		else
		{
			// if vote is not the same give 0 pionts
			for( i in scores)
			{
				var names = scores[i].name;
				var totalScore = scores[i].total;
				// If array score party name is the same as
				// array subject party name.
				if (names === party)
				{
					scores[i].total += 0;
					console.log(names, scores[i].total);					
				}
			}	
		}
	}
	console.log(scores.sort(sortTotal));
	scores.sort(sortTotal);
}

// sort total score
function sortTotal(a, b) 
{
  var a = a.total;
  var b = b.total;
  
  var comparison = 0;
  if (a > b) {
    comparison = 1;
  } else if (a < b) {
    comparison = -1;
  }
  return comparison;
}

//get all parties with an match
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
	question.innerHTML = "Dit zijn de partijen die matchen met jou stemmen, de blauwe partij namen zijn de partijen die gefilterd zijn";
}

//get the biggest parties
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

//filter buttons in the fieldset
function show(name)
{	
	name.style.backgroundColor = "gray";
	name.disabled = true;

	for (var i = 0; i < scores.length; i++) 
	{
		if (name.innerHTML == scores[i].name)
		{	
			console.log(scores[i].name, scores[i].total);

			var first = document.getElementById("first").innerHTML += scores[i].name + "<br>";
			var second = document.getElementById("second").innerHTML += scores[i].total + "<br>";
		}
	}
}


