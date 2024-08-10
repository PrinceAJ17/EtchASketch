const container = document.querySelector(".container")
const numinpt = document.querySelector("#numinpt")
const spanItems = document.querySelectorAll(".myNum")
const colorpicker = document.querySelector(".colorpicker")
const resetbutton = document.querySelector(".resetbutton button").addEventListener("click", resetGrid)
const toggleElement = document.querySelector(".toggle")


toggleElement.addEventListener("click", ()=>{
    const isChecked = toggleElement.getAttribute("aria-checked") === 'true'
    toggleElement.setAttribute("aria-checked", !isChecked)
})


function changeColors(e){
    e.style.background = colorpicker.value
}

function createGrid(){
    container.innerHTML = ""
    spanItems.forEach(span =>{
        span.textContent = numinpt.value
    })
    gridSize = parseInt(numinpt.value)
    for(let j=0; j<gridSize; j++){
        const div1 = document.createElement("div")
        div1.classList.add("div1")
        div1.setAttribute("style", "outline: 1px solid; display:flex; flex-direction: column; background-color: white; height: 100%; width: 100%;")
        div1.addEventListener("mouseover",()=> changeColors(div1))
        for(let i=0; i<gridSize; i++){
            const div2 = document.createElement("div");
            div2.classList.add("div2");
            div2.setAttribute("style", "outline: 1px solid; display:flex; flex-direction: column; background-color: white; height: 100%; width: 100%;")
            div2.addEventListener("mouseover",() => changeColors(div2))
            div1.appendChild(div2)
        }
        container.appendChild(div1)
    }
}

function resetGrid(){
    const allDivs = document.querySelectorAll(".div1, .div2")
    allDivs.forEach(div =>{
        div.style.background = "white"
    })
    colorpicker.value = "#ffffff"
}


document.addEventListener("DOMContentLoaded", ()=>{
    createGrid(parseInt(numinpt.value))
})

numinpt.addEventListener("input", () => {
    createGrid(parseInt(numinpt.value))
})




