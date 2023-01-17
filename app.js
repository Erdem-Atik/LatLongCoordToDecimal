"use strict";

const inpValue = document.getElementById('inputCoord')
const inpbtn = document.getElementById('inputBtn')
const convrtdCoord = document.getElementsByClassName('.convertedCoord')
console.log(convrtdCoord);


let coordValue;

const inpCoord = inpbtn.addEventListener('click', function(event){
    event.preventDefault();
    coordValue = inpValue.value
    console.log(parseLatLong(coordValue));
    let convertedValue = parseLatLong(coordValue)
})


function parseLatLong(input) {

if(!( input.toUpperCase() != input.toLowerCase())) {   // if geodirection abbr. isn't exist, it should be already decimal notation
    return `${input}:the coordinate already seems as decimal or not valid format`
}
const parts = input.split(/[°'"]+/).join(' ').split(/[^\w\S]+/); // thanks to Shannon Antonio Black(StackoverFlow) for regEx patterns 
const replacedComa = parts.map(el=>el.replace(',','.')) // in case the given numbers include comma as decimal separator
const geoLetters = replacedComa.filter(el=> !(+el))
geoLetters.filter(el=>{return el !== ''} ); // if the array contains empty string, it will remove. Above regex pattern sometimes make side effect
const coordNumber = replacedComa.filter(n=>(+n)).map(nr=>+nr)
const latNumber = coordNumber.slice(0,(coordNumber.length/2))
const longNumber = coordNumber.slice((coordNumber.length/2))
const reducer = function(acc,coord,curInd){
   return (acc + (coord/Math.pow( 60, curInd++ )))
}
let latDec = latNumber.reduce(reducer)
let longDec = longNumber.reduce(reducer)

if((geoLetters[0].toUpperCase()==='S')||(geoLetters[0].toUpperCase()==='G')) latDec = -latDec // G is abr. of güney(it means South in Turkish)
if((geoLetters[1].toUpperCase()==='W')||(geoLetters[1].toUpperCase()==='B')) longDec= -longDec // B is abr. of batı (it means west in Turkish)


return `${latDec} ${longDec}`
}

