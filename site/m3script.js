// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#btn")
      .addEventListener("click", function () {
        
    
	$ajaxUtils
       .sendGetRequest("m3data.json", 
            function (res) {
              var message = "  ";
              var input=
              document.getElementById("in").value;
                console.log("input: "+input);
	      var c=0;
              for(var i=0;i<4;i++)
              {
                if(res[i].sap_id==num)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].email===num)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].contact_no==num)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].cgpa==num)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].date_of_birth===num)
                {
                  message+=res[i].name+" ";
                  c++;
                }

              }
              if(c==0)
              {
                message+="data not found";
              }
              document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
            
            });

 		
      });
  }
);
