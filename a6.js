
//3.
let radians = function toRad(angle){

    if(isNaN(angleDeg)){
        console.log("solnError, toRadians: angleDeg is not a number. The cats are mad.")
    }
    return radians= angle * PI/180
}


//4.
function isValidNumber(inputNum, validMin, validMax){

    if(inputNum >= validMin && inputNum <= validMax){
        return true;
    }
        
    if( isNaN(inputNum)){
        return true;
    } 

    if(inputNum > validMax || inputNum < validMin ){
        return false;
    }
    
    
}

//5.
function drawObject(x, y){
    var canvas = document.getElementById("a6");
    var ctx = canvas.getContext('2d');
    // ctx.save();
    // ctx.transalte(x,y);
    // ctx.rotate(toRadians(radians));
     ctx.fillRect(x,y,50,50);
    // ctx.fill();
    // ctx.restore();

}

function draw(how_many_time, distance)
{
	var x = 50;
	var y = 50;
    for(var i = 0; i < how_many_time; i++)
    {
      drawObject(x, y); 
      x += 60;
      y += 30;
    }
}


var validMin = 1;
var validMax = 10;

let N = +prompt("Please enter a number of objects to draw to draw on the canvas: ");
inputNum = N;

while(!isValidNumber(inputNum, validMin, validMax)){

    alert("input is not valid");
    inputNum = +prompt("Please enter a number of objects to draw to draw on the canvas: ");
   
}


let R = +prompt("Please enter a distance: ");
inputNum = R;

while(!isValidNumber(inputNum, validMin, validMax)){

    alert("input is not valid");
    inputNum = +prompt("Please enter a distance: ");
   
}


draw(N, R);


