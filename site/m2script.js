function onLoad(){
	var name = document.getElementById("name").value;
	 console.log(name);
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200 ) {
			var jsonObj = JSON.parse(xhttp.responseText);
			var flag = 1;
			console.log(jsonObj.length);
			for (var i = 0; i < jsonObj.length; i++) {
				if (jsonObj[i].name == name)
				{
					document.getElementById("demo").innerHTML = "For "+name+",<br>Course : "+jsonObj[i].course+"<br>Theory lectures conducted: : "+jsonObj[i].t_lec_conducted+"<br>Theory lectures attended:"+jsonObj[i].t_lec_attended+"<br> Labs conducted:"+jsonObj[i].labs_conducted+"<br> Labs attended:"+jsonObj[i].labs_attended;
					break;
				}
				else 
				{
					flag = 0;
				}
				if (flag == 0) {
					document.getElementById("demo").innerHTML = "Incorrect Name";	
				}
			

			}

			for(var i=0;i<jsonObj.length;i++)
				{
					if(jsonObj[i].t_lec_attended<=(0.8*jsonObj[i].t_lec_conducted))
						document.getElementById("demo").innerHTML ="Defaulter";
					
				else if (jsonObj[i].labs_attended<=(0.8*jsonObj[i].labs_conducted))
						document.getElementById("demo").innerHTML ="Defaulter";
				else
					break;
				

				}
		}
	};
	xhttp.open("GET","m2data.json",true);
	xhttp.send(null);
}
