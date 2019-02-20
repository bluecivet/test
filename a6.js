
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
        return console.log("true");
    }
    break;
        
    if( isNaN(inputNum) == ture){
        return console.log("false");
    }
    break;

    if(inputNum > validMax || inputNum < validMin ){
        return console.log("false");
    }
    
    
}

//5.
function drawObject(x, y){

    ctx.save();
    ctx.transalte(x,y);
    ctx.rotate(toRadians(radians));
    ctx.fillRect(x,y,50,50);
    ctx.fill();
    ctx.restore();

    


}



let N = +prompt("Please enter a number of objects to draw to draw on the canvas: ");
inputNum = N;

while(isValidNumber(inputNum, validMin, validMax) == false){

    alert("input is not valid");
    inputNum = +prompt("Please enter a number of objects to draw to draw on the canvas: ");
   
}


let R = +prompt("Please enter a distance: ");
inputNum = R;

while(isValidNumber(inputNum, validMin, validMax) == false){

    alert("input is not valid");
    inputNum = +prompt("Please enter a distance: ");
   
}



