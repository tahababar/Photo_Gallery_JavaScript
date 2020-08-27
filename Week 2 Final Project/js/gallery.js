
function upDate(previewPic){
   //if browser can not upload picture
   document.getElementById("image").style.backgroundColor = "F0FFFF";
   //if browser can upload picture
   var x = previewPic.src;
   var y = previewPic.alt;
   document.getElementById("image").style.backgroundImage = "url('"+ x +"')";
   document.getElementById("image").innerHTML = y;
}

function unDo(){
   //if browser can not upload picture
   document.getElementById("image").style.backgroundColor = "F0FFFF";
   //if browser can upload picture
   var a = '';
   var b = "Hover over an image below to display here";
   document.getElementById("image").style.backgroundImage =  "url(a)";
   document.getElementById("image").innerHTML = b;
}

