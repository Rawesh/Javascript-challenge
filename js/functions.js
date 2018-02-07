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

