<script>
    function tocheck(){
        var un = document.getElementById("username").value;
        var em = document.getElementById("email").value;
        var p1 = document.getElementById("password1").value;
        var p2 = document.getElementById("password2").value;
    
    
     if(p1 === "" || p1.length<6){
      document.getElementById("p1").innerHTML = "Password must be at least 6 characters";
        
      document.getElementById("password1").style.borderColor = "red";
    }
    else {
        
      document.getElementById("password1").style.borderColor = "green";
      document.getElementById("p1").innerHTML = "";
      
    }
    
   if(p1 !== p2 || p2 ===""){
        document.getElementById("p2").innerHTML = "Passwords do not match";
        
      document.getElementById("password1").style.borderColor = "red";
           document.getElementById("password2").style.borderColor = "red";
    }
    else{
        
      document.getElementById("password2").style.borderColor = "green";
       document.getElementById("p2").innerHTML = "";
      
    }

    if(fn === ""){
      document.getElementById("un").innerHTML = "Please enter a valid name";
        
      document.getElementById("username").style.borderColor = "red";
    }
    else {
        
      document.getElementById("username").style.borderColor = "green";
         document.getElementById("un").innerHTML = "";
    }
    
     if(em === ""){
      document.getElementById("em").innerHTML = "Please enter a valid name";
        
      document.getElementById("em").style.borderColor = "red";
    }
     else{
      
      document.getElementById("email").style.borderColor = "green";
       document.getElementById("em").innerHTML = "";
    }
}
</script>



