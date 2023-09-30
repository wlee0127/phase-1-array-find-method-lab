// code your solution here
const record = [
    { year: "2015", result: "N"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
];

function isWin(object){
    debugger;
   return object.result === "W";
}

function superbowlWin(array){
    debugger;
    let answer = array.find(isWin);
    if (answer != undefined){
        return answer.year;
    }else {
        return answer;
    }
}

//let answer = record.find(element => element.result === "W")
//console.log(answer)

console.log(superbowlWin(record))

