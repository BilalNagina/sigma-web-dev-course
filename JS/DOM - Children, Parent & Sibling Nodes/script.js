console.log("Hello World!");
// Access the container
let con = document.body.childNodes[1]

// Explore Container elements using Properties
con.firstElementChild.style.color = "red";
con.firstElementChild
con.firstChild
con.lastChild
con.lastElementChild
con.parentElement
con.parentNode
con.nextSibling
con.nextElementSibling
con.previousSibling
con.previousElementSibling

// Access Table
document.body.children[1]

// Access tbody
document.body.children[1].children[0]

// Access Table Row
document.body.children[1].children[0].firstElementChild

//Access Table Data
document.body.children[1].children[0].firstElementChild.firstElementChild.cellIndex

// Table Properties
table.rows
table.caption
table.thead
table.tbodies
table.tfoot
tbody.rows

// Table row Properties
tr.cells
tr.sectionRowIndex
tr.rowIndex

//  Table Data Properties
td.cellIndex