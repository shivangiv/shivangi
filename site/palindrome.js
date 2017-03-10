function checkPalindrome()
{
	
	var string =
	document.getElementById("name").value;
	var front=0;
	var back= string.length-1;
	string=string.toLowerCase();

	while(front<back)
	{
		if(string.charAt(front)!=string.charAt(back))
		{
			var message="The string " +string+ " is not a palindrome!";
		}

		
	
	else
	{

		var message="The string "+string+ " is a palindrome!";
	}
	front++;
   	back--;

}
  document
    .getElementById("content")
    .innerHTML = message;
}