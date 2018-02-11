function buttonAttr()
{
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
		non.style.visibility = "hidden";
		resultButton.style.visibility = "visible";
		result.style.visibility = "visible";
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
					scores[i].total += 1;
					console.log(names, scores[i].total);					
				}
			}
		}
		else
		{
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

function showResult(filter)
{
	if (filter == 1)
	{	
		for(i in scores)
		{
			if (scores[i].total > 0)
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
				td.appendChild(pScore);
				tr.appendChild(td);

				// --------------------
				table2.appendChild(tr);
			}

			match.style.visibility = "hidden";
		}
	}
	else
	{
		if (filter == 0)
		{	
			for(i in scores)
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
				td.appendChild(pScore);
				tr.appendChild(td);

				// --------------------
				table.appendChild(tr);
			}

			result.style.visibility = "hidden";
		}
	}

}
