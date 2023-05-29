function myFunction() {
    var x = document.getElementById("content");
    var y = document.getElementById("container");
    if (x.style.display === "none"  ) {
      x.style.display = "block";
      y.style.display = "none";
      
    }  else {
        x.style.display = "none";
        y.style.display = "";
        
    }
}

