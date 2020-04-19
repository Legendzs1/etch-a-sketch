
const container = document.getElementById("gridContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

document.getElementById("gridContainer").addEventListener("mouseover",function(e) {
    if(e.target && e.target.matches("div.cell")) {
        e.target.style.backgroundColor = 	"#b57edc";
    }
})


function resetBColor(e) {
    //let getResetButton = document.getElementById("resetColor")
//    document.getElementById("resetColor").addEventListener("onclick",function(e) {
        //console.log(e)
    //}
//)
   //console.log(getResetButton)
   //document.body.style.backgroundColor = "white";

   let getCells = document.getElementsByClassName("cell");
   console.log(getCells[0].style.backgroundColor);
    
   //console.log(getCells.length);
    for( cell of getCells) {
        cell.style.backgroundColor = "black";
        //console.log(cell.style)
    }
}


