const container = document.querySelector(".container")
const numinpt = document.querySelector("#numinpt")
const spanItems = document.querySelectorAll(".myNum")
const colorpicker = document.querySelector(".colorpicker")
const resetbutton = document.querySelector(".resetbutton button").addEventListener("click", resetGrid)
const eraserEle = document.querySelector(".toggle")
const randEle = document.querySelector(".toggle2")
const gridEle = document.querySelector(".toggle3")

eraserEle.addEventListener("click", ()=>{
    const isChecked = eraserEle.getAttribute("aria-checked") === 'true'
    eraserEle.setAttribute("aria-checked", !isChecked)
    if(isChecked){
        randEle.setAttribute("aria-checked", !isChecked)
    }else{
        randEle.setAttribute("aria-checked", isChecked)
    }
})

randEle.addEventListener("click", ()=>{
    const isChecked = randEle.getAttribute("aria-checked") === 'true'
    randEle.setAttribute("aria-checked", !isChecked)
    if(isChecked){
        eraserEle.setAttribute("aria-checked", !isChecked)
    }else{
        eraserEle.setAttribute("aria-checked", isChecked)
    }
})

gridEle.addEventListener("click", ()=>{
    const isChecked = gridEle.getAttribute("aria-checked") === 'true'
    gridEle.setAttribute("aria-checked", !isChecked)
    const allDivs = document.querySelectorAll(".div1, .div2")
    allDivs.forEach(div =>{
        if(isChecked){
            div.style.outline = "1px solid"
        }
        else{
            div.style.outline = "none"
        }
    })
})


function changeColors(e){
    if(eraserEle.getAttribute("aria-checked")==="true"){
        e.style.background = "white"
    }
    else if(randEle.getAttribute("aria-checked")==="true"){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        e.style.background = color;

    }
    else{
        e.style.background = colorpicker.value
    }
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
}


document.addEventListener("DOMContentLoaded", ()=>{
    createGrid(parseInt(numinpt.value))
})

numinpt.addEventListener("input", () => {
    createGrid(parseInt(numinpt.value))
})




