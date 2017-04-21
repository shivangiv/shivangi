// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#btn")
      .addEventListener("click", function () {
        
    
	$ajaxUtils
          .sendGetRequest("m3data.json", 
            function (res) {
	      var getvalue = document.getElementById("fname").value; 
		var arr;
	        
	      
	      console.log("test1");
	      var message = "Data not found"; 

	      var i;
	      for (i = 0; i<4;i++)
	      {
	      	if(getvalue ==res.arr[i].sap_id || getvalue == res.arr[i].email || getvalue == res.arr[i].contact_no || getvalue == res.arr[i].date_of_birth || getvalue === res.arr[i].cgpa)
	      	{
	      		message = res.arr[i].name;
	      	}
	      }
              document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
            
            });


 		
      });
  }
);
			 /*for (i = 0; i<4; i++) 
			{
			
				if (sap_id[i]==num || )
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
*/
