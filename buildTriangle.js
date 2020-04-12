function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(width) {
// accepts an input (the triangle at its widest width) 
// will return the string representation of a triangle.
  var triangle = "";

  for(var i = 1; i <= width; i++) {
    triangle += makeLine(i);
  }

  return triangle;

}

console.log(buildTriangle(10));