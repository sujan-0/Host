document.getElementsByClassName("exercise")[0].innerHTML=("Hello Sujan ");
document.getElementsByClassName("exercise")[1].innerHTML=("hello Nepal");
document.getElementsByClassName("exercise")[2].innerHTML=("HIII3");
document.getElementById("parent1").style.cssText=("background-color:red; color:black; text-align:center");

document.getElementsByTagName("h1")[0].style.cssText=("background-color:Red; color:black");
document.getElementsByTagName("h1")[1].style.cssText=("background-color:white; color:blue");
document.getElementsByTagName("h1")[2].style.cssText=("background-color:green; color:white");

document.querySelector("h2").style.cssText=("text-align:center; text-transform:uppercase");
document.querySelector("#hi").style.cssText=("text-align:center; text-transform:uppercase")
document.querySelector(".hey").style.cssText=("text-align:center; text-transform:uppercase");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am sujan");

}

function myFunction(){
    document.open();
    document.write("<h1>Hello world </h1>");
    document.close()
}









