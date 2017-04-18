function onLoad(){
	var name = document.getElementById("name").value;
	 console.log(name);
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200 ) {
			var jsonObj = JSON.parse(xhttp.responseText);
			var flag = 1;
			console.log(jsonObj.length);
			console.log(jsonObj.name)
			var i=0;
			var j=0;
			console.log("Testing 1.1");
			for (i in jsonObj.data) 
			{
				for( j in jsonObj.data[i].course)
				{
				if (jsonObj.data[i].name == name)
				{
					document.getElementById("demo").innerHTML = "For "+name+" "+jsonObj.data.course[j];
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
			

			

		}
		}
	};
	xhttp.open("GET","m2data.json",true);
	xhttp.send(null);
}
