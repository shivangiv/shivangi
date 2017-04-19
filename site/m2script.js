function onLoad(){
	var name = document.getElementById("name").value;
	 console.log("Name Entered:");
	 console.log(name);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200 ) {
			var jsonObj = JSON.parse(this.responseText);
			var flag = 1;
			console.log("Length of JSON Object:")
			console.log(jsonObj.length);
			var i=0;
			for (i = 0; i < jsonObj.length; i++) 
			{
				console.log("Json Object Array Name:");
				console.log(jsonObj[i].name);
				console.log("Name Entered:");
				console.log(name);
				if (jsonObj[i].name == name)
				{
					document.getElementById("demo").innerHTML = "For "+name+",<br>Course : "+jsonObj[i].course+"<br>Theory lectures conducted: : "+jsonObj[i].t_lec_conducted+"<br>Theory lectures attended:"+jsonObj[i].t_lec_attended+"<br> Labs conducted:"+jsonObj[i].labs_conducted+"<br> Labs attended:"+jsonObj[i].labs_attended;
					console.log(jsonObj);
					flag = 1;
					break;
				}
				else 
				{
					flag = 0;
				}
				
				if (flag == 0) 
				{
					document.getElementById("demo").innerHTML = "Incorrect Name";	
				}
			}
			
				if(jsonObj[i].t_lec_attended<=(0.8*jsonObj[i].t_lec_conducted))
					document.getElementById("demo").innerHTML ="Defaulter";
					
				else if (jsonObj[i].labs_attended<=(0.8*jsonObj[i].labs_conducted))
					document.getElementById("demo").innerHTML ="Defaulter";

		}
	};
	xhttp.open("GET","m2data.json",true);
	xhttp.send();
}
