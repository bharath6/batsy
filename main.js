function getfile(file,callback)
{
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
if(xhr.readyState === 4 && xhr.status == "200"){
  callback(xhr.responseText);
    }
  };
 xhr.send(null);
}
getfile("data.json",function(text)
{
var data = JSON.parse(text);
console.log(data);
career(data.career);
}
)
var child2=document.querySelector(".childTwo");
function career(careerInfo)
{
var carrerHeading=document.createElement("h3");
var ch = document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(careerheading);
carrerHeading.textContent="CAREER OBJECTIVE";
var careerHr=document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(ch);
}
