function countDownTimer(){
console.log ("countDownTimer() started");
var currTime = 50;
document.getElementById("countDis").innerHTML = currTime + " sec"; 

//45 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 5000);

//40 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 10000);

//35 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 15000);

//30 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 20000);

//25 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementByID("countDis").innerHTML = currTime + " sec"; 
}, 25000);

//20 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 30000);

//15 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 35000);

//10 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 40000);

//5 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
}, 45000);

//0 sec display
setTimeout(function(){
    currTime = currTime - 5; 
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + "Blastoff!!!!"; 
}, 50000);
}

