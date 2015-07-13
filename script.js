// The instructions asked to make a chess board that takes any number and makes a
// grid. I would either make a neat looking grid that looks like
// a checkerboard so I did size by size using '# ' or ' #'. I did not do it counting
// each space and # separate.
var size = prompt("Pick a number to create the chess board size you want.");
// store the rows and cols to print out later
var chessBoard = "";
// makes rows
for(var row=0; row<size; row++) {
  // makes columns
  for(var col=0; col<size; col++) {
    // if the row is even store this
    if (row % 2 === 0) {
      chessBoard += '# ';
      // else store this for odd rows
    }else {
      chessBoard += ' #';
    }
    // when the column gets to the end of the row add a new line.
    // col+1 keeps the product from being 0 first and adding # at the end and front.
    if((col+1) % size === 0) {
        chessBoard += "\n";
    }
  }
}
console.log(chessBoard);


// Mike's Solution

console.log("Mike's Solution");
var size = 8;
for (var i = 0; i < size; i++) {
  var line = "";
  for (var j = 0; j < size; j++) {
    var total = i + j;
    if (total % 2 === 0) {
      line += ' '
    } else {
    line += '#'
    }
  }
  console.log(line);
}
