let char = "3";
function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}
 console.log(makeLine(5));

function makeSquare(size){
    let square = "";
    
    for (let i = 0; i < size; i++) {
    square += (makeLine(size, char) + "\n");
    }
    return square;
}
 console.log(makeSquare(5, "*"));

function makeRectangle(width, height){
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + "\n");
        
    }
    return rectangle;
}
// console.log(makeRectangle(5,3))
function makeSquare(size){
let square = makeRectangle(size,size);
    // for (let i = 0; i < size; i++) {
    // square += (makeLine(size) + "\n");
    // }

    return square.slice(0,-1);
}
// console.log(makeSquare(5));

function makeDownwardStairs(height){
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeLine(i+1) + "\n");
        
    }
    return triangle;
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpace, numChars){
        space = "";
        num = "";
        for (let j = 0; j < numSpace; j++) {
            space += " ";
            
        }
    
        num += space + (makeLine(numChars)) + space;

    return num;
}
// console.log(makeSpaceLine(2,5));

function makeIsoscelesTriangle(height){
    triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + "\n");
        
    }
    return triangle;
}
// console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}






function makeDiamond(height){
   let diamond = "";
    diamond = makeIsoscelesTriangle(height).trimEnd() + reverse(makeIsoscelesTriangle(height)).trimEnd();
    
    return diamond;
}
console.log(makeDiamond(5));