
function salary()

  {
	var cost = $("#cost").val();
	var hours = $("#hours").val();
  var pl=$("#pl").val();
  var tax = $("#tax").val();
  var insu = $("#insu").val();
  var bonus = $("#bonus").val();
	var result = ((cost*hours)-((cost*hours*tax)/100))-((cost*hours*insu)/100)+(bonus/12)*pl;
	window.alert("Your total cost is: $" + result);
  };
 function icount()
  {
    var imageElement = document.createElement("img");
    imageElement.id = "image" + icount;
    imageElement.class = "picture";
    imageElement.style.maxWidth = "90px";
    var displayElement = document.getElementById("displayPlace");
    displayElement.appendChild(imageElement);
    document.getElementById("image" + icount).src = "download.jpg";
  };
