function onLoad(){
	var fname = document.getElementById("fname").value;
	 console.log(fname);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200 ) {
			var jsonObj = JSON.parse(this.responseText);
			var flag = 1
			var i=0;
			var num = Number(document.getElementById("fname").value);
			for (i = 0; i<4; i++) 
			{
			
				if (sap_id[i]==num)
				{
					document.getElementById("demo").innerHTML = "name is: " +name;
				
					flag = 1;
					break;
				}
				else if(email[i]==num)
					{
					document.getElementById("demo").innerHTML = "name is: " +name;
					
					flag = 1;
					break;
				 }	
				 else if(contact_no[i]==num)
				 	{
						document.getElementById("demo").innerHTML = "name is: " +name;
						flag = 1;
						break;
				}
				else if(date_of_birth:[i]==num)
					{
					document.getElementById("demo").innerHTML = "name is: " +name;
					
					flag = 1;
					break;
				  }
				 else if(cgpa[i]==num)
					{
					document.getElementById("demo").innerHTML = "name is: " +name;
					flag = 1;
					break;
				 }

				else 
				{
					flag = 0;
				}
				
				if (flag == 0) 
				{
					document.getElementById("demo").innerHTML = "Data not found";	
				}
			}
			

		}
	};
	xhttp.open("GET","m3data.json",true);
	xhttp.send();
}