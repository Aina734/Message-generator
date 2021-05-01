// .value help us to get the actual value of the document.getElementById
function dayOfWeekZero() { 
    const randomDay = Math.floor(Math.random()*7)
    switch (randomDay) {
        case 0:
            return 'Monday';
            break;
        case 1:
            return 'Tuesday';
            break;
        case 2:
            return 'Wednesday';
            break;
        case 3:
            return 'Thursday';
            break;
        case 4:
            return 'Friday';
            break;
        case 5:
            return 'Saturday';
            break;
        case 6:
            return 'Sunday';
            break;
        default:
        return 'Upsy something is not right!!';
            break;
    };
}
function timeOfDayOne(){ 
    const randomTime = Math.floor(Math.random()*5)
    switch (randomTime) {
        case 0:
            return 'Morning';
            break;
        case 1:
            return 'Afternoon';
            break;
        case 2:
            return 'Evening';
            break;
        case 3:
            return 'Night';
            break;
        case 4:
            return 'Dawn';
            break;
        default:
            return 'Upsy something is not right!!';
            break;
    };
} 
function activityTwo() { 
    const randomActivity = Math.floor(Math.random()*8)
    switch (randomActivity) {
        case 0:
            return 'Conjure an antigue beast from another dimension or time';
            break;
        case 1:
            return 'Collect Fairyfly antennae';
            break;
        case 2:
            return 'Hit a complete unknow person with the bigger book you found';
            break;
        case 3:
            return 'Do a puzzle with the eyes closed';
            break;
        case 4:
            return 'Make a contingensy plan for the Apolcalyse';
            break;
        case 5:
            return 'Study if sane people laught in a determinate spectrum';
            break;
        case 6:
            return 'Play tic tac toe with bloody Mary';
            break;
        case 7:
            return 'Take over your favorite place and forcing everyone to serve you Muahahaha';
            break;
        default:
            return 'Upsy something is not right!!';
            break;
    }
} 
function fictionalCharacterThree() { 
    const randomFicCharacter = Math.floor(Math.random()*9)
    switch (randomFicCharacter) {
        case 0:
            return 'Sauron (LORT)';
            break;
        case 1:
            return 'Shao Khan (MK)';
            break;
        case 2:
            return 'Ike (Fire Emblem)';
            break;
        case 3:
            return 'Prowl (Transformers)';
            break;
        case 4:
            return 'Din Djarin (The Mandalorian)';
            break;
        case 5:
            return 'Mio Amakura (Fatal Frame)'
            break;
        case 6:
            return 'Squall (FF8)';
            break;
        case 7:
            return 'Alucard (Castlevania)';
            break;
        case 8:
                return 'Dante (DMC)';
                break;
        default:
            return 'Upsy something is not right!!';
            break;
    } ;
}
function finalMessage() { 
    var userName = document.getElementById('userInput').value
     return `On ${dayOfWeekZero()} ${timeOfDayOne()}, ${userName} and ${fictionalCharacterThree()}  
     went to ${activityTwo()}.`;
     //I have to remove the console.log to make it work
}

    