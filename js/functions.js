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
		result.style.visibility = "visible";
	}
	else
	{
		back.style.visibility = "hidden";	
	}
}

function compare(choise, num)
{   // Get array parties.
	for (parties in subjects[num].parties)
	{
		var party = subjects[num].parties[parties].name;
		var vote = subjects[num].parties[parties].position;
		// If my choise is the same as party choise.
		if (choise === vote)
		{   // Get status array.
			for( i in score[0].status)
			{
				var names = score[0].status[i].name;
				var totalScore = score[0].status[i].total;
				// If array score party name is the same as
				// array subject party name.
				if (names === party)
				{
					var cells = document.getElementsByClassName('cell');
					score[0].status[i].total += 1;
					cells[i].innerHTML = score[0].status[i].total;
					console.log(names, score[0].status[i].total);					
				}
			}
		}
		else
		{
			for( i in score[0].status)
			{
				var names = score[0].status[i].name;
				var totalScore = score[0].status[i].total;
				// If array score party name is the same as
				// array subject party name.
				if (names === party)
				{
					score[0].status[i].total += 0;
					console.log(names, score[0].status[i].total);					
				}
			}	
		}
	}	
}
