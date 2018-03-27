const args = process.argv.slice(2);
const fs = require("fs");
const path = require("path");
const nicecharacters = JSON.parse(fs.readFileSync(path.join(__dirname, "nc.json"), "UTF8"))
let line1 = "";
let line2 = "";
let line3 = "";
let line4 = "";
let line5 = "";
function addChar(char) { 
    char = char.toUpperCase()
    if(nicecharacters[char]) {
        line1 += nicecharacters[char]["1"];
        line2 += nicecharacters[char]["2"];
        line3 += nicecharacters[char]["3"];
        line4 += nicecharacters[char]["4"];
        line5 += nicecharacters[char]["5"];
    }
}
function addChars(chars) { 
    chars = chars.toUpperCase()
    for(var char in chars.split("")) {
        addChar(chars.split("")[char]);
    }
}
function finalizeLines() {
    var finalReturn = "";
    finalReturn += line1 + "\n";
    finalReturn += line2 + "\n";
    finalReturn += line3 + "\n";
    finalReturn += line4 + "\n";
    finalReturn += line5;
    return finalReturn;
}
addChars(args.join(" "))
console.log(finalizeLines())
