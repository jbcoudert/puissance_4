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

for (let i = 0; i < 6; i++ ) {
    var divElement = document.createElement("div")
    grDiv.appendChild(divElement)
    divElement.setAttribute("class", "divclick divclick2")
    var trElement = document.createElement("tr")
    tablo.appendChild(trElement)
    trElement.setAttribute("class", "cell")
        divElement.addEventListener("click", function () {
            // if (tdElement.innerHTML == ""){
            //     if (click1 == ) {
                    
            //     }
            // }
            if (click1 == null) {
                var elmts = document.getElementsByClassName("divclick")
                for (let k = 0; k < elmts.length; k++) {
                    elmts[k].classList.remove("divclick2")
                }
                click1 = this
            } 
            else {
                var elmts = document.getElementsByClassName("divclick")
                for (let k = 0; k < elmts.length; k++) {
                    elmts[k].classList.add("divclick2");
                }
                click2 = this
                click1 = null
                click2 = null
            }

        })
    
    for (let j = 0; j < 6; j++) {
        var tdElement = document.createElement("td")
        trElement.appendChild(tdElement)
        tdElement.setAttribute("class", "cell")
        // tdElement.setAttribute("id", i+ "-" +j)
    }
}

