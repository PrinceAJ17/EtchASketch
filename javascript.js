//container
const container = document.querySelector(".container")
//div
const numinpt = document.querySelector("#numinpt")
numinpt.addEventListener("change", () => {
    container.innerHTML = ""
    const gridSize = parseInt(numinpt.value)
    for(let j=0; j<gridSize; j++){
        const div1 = document.createElement("div")
        div1.classList.add("div1")
        div1.setAttribute("style", "outline: 1px solid; display:flex; flex-direction: column; background-color: white; height: 100%; width: 100%;")
        for(let i=0; i<gridSize; i++){
            const div2 = document.createElement("div");
            div2.classList.add("div2");
            div2.setAttribute("style", "outline: 1px solid; display:flex; flex-direction: column; background-color: white; height: 100%; width: 100%;")
            div1.appendChild(div2)
        }
        container.appendChild(div1)
    }
})




