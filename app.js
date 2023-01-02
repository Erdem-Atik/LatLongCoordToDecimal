
function parseLatLong(input) {

if(!( input.toUpperCase() != input.toLowerCase()) ) {   // if geodirection abbr. isn't exist, it should be already decimal notation
    return `${input}:the coordinate already seems as decimal`
}
const parts = input.split(/[°'"]+/).join(' ').split(/[^\w\S]+/); // thanks to Shannon Antonio Black for regEx patterns 
const geoLetters = parts.filter(el=> !(+el) )
const coordNumber = parts.filter(n=>(+n)).map(nr=>+nr)
const latNumber = coordNumber.slice(0,(coordNumber.length/2))
const longNumber = coordNumber.slice((coordNumber.length/2))
const reducer = function(acc,coord,curInd){
   return acc + (coord/Math.pow( 60, curInd++ ))
}
let latDec = latNumber.reduce(reducer)
let longDec = longNumber.reduce(reducer)

if((geoLetters[0].toUpperCase()==='S')||(geoLetters[0].toUpperCase()==='G')) latDec = -latDec // G is abr. of güney(it means South in Turkish)
if((geoLetters[1].toUpperCase()==='W')||(geoLetters[1].toUpperCase()==='B')) longDec= -longDec // B is abr. of batı (it means west in Turkish)
console.log(latDec);

const dec= [{
    ltCoord: latDec,
    geoLet:geoLetters[0]
},
{
    longCoord: longDec,
    geoLet: geoLetters[1]
}]

return dec
}