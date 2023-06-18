// Code your solution in this file!
function distanceFromHqInBlocks(blocknumber) {
    if (blocknumber > 42) {
        return distance in blocknumber -42
    } 
    else {
        return 42 - blocknumber
    }
    
   

    }



function distanceFromHqInBlocks(blocks){
    let feet = distanceFromHqInBlocks(50)
    return feet * 264
}


function distanceTravelledInFeet (start, destination){
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
    
}

function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet (start, destination)<=400)
    {return 0}

    else if (distanceFromHqInBlocks (start, destination)>400 && distanceTravelledInFeet(start, destination)<= 2000)
    {return (distanceTravelledInFeet (start, destination) - 400 ) * 0.02}

    else if (distanceTravelledInFeet (start, destination)>2000 && distanceTravelledInFeet(start, destination)>2500)
    {return 25}
    else {
        return "cannot that far"
    }
}



