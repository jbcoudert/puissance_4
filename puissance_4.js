var grDiv = document.createElement("div")
document.body.appendChild(grDiv)
grDiv.setAttribute("id", "lagrossediv")

var grTablo = document.createElement("div")
document.body.appendChild(grTablo)
grTablo.setAttribute("id", "legrostablo")

var tablo = document.createElement("table")
grTablo.appendChild(tablo)

click1 = null
click2 = null


for (let i = 0; i < 9; i++ ) {
    var divElement = document.createElement("div")
    grDiv.appendChild(divElement)
    divElement.setAttribute("class", "divclick divclick2")
    divElement.setAttribute("id", i)
    divElement.addEventListener("click", function(){   
            
        var colNum = this.id
        
        currentCol = document.querySelectorAll(".cell[id$='-"+colNum+"']:not(.played)")

        if (currentCol.length != 0){
        
        lastCell = currentCol[currentCol.length -1];
        lastCell.className = "played"
        console.log(lastCell)
        console.log(currentCol); 
        var divduclick = document.createElement("div")
        lastCell.appendChild(divduclick) 
        divduclick.setAttribute("class", "pionRed pionYellow")

        if (click1 == null) {
            var elmts = document.getElementsByClassName("divclick")
            for (let k = 0; k < elmts.length; k++) {
                elmts[k].classList.remove("divclick2") 
                divduclick.classList.add("pionYellow")
            }
            click1 = this
        } 
        else {
            var elmts = document.getElementsByClassName("divclick")
            for (let k = 0; k < elmts.length; k++) {
                elmts[k].classList.add("divclick2");
                divduclick.classList.remove("pionYellow")
            }
            click2 = this

            click1 = null
            click2 = null
        }        
        }
        
    })
}


for (let i = 0; i < 9; i++ ) {

    var trElement = document.createElement("tr")
    tablo.appendChild(trElement)
    trElement.setAttribute("class", "cell")
    
    for (let j = 0; j < 9; j++) {
        var tdElement = document.createElement("td")
        trElement.appendChild(tdElement)
        tdElement.setAttribute("class", "cell")
        tdElement.setAttribute("id", i+"-"+j)
    }
}


