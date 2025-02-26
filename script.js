document.addEventListener("DOMContentLoaded",function(){loadGrid(16)})

function loadGrid(squaresPerSide){
    let color = [Math.random()*100,Math.random()*100,Math.random()*100]
    let rgb = `rgb(${color[0]}%,${color[1]}%,${color[2]}%)`
    
    const containerDiv = document.querySelector('#container')
    containerDiv.style.borderColor = rgb

    for(let i = 0; i < squaresPerSide; i++){
        for(let i = 0; i < squaresPerSide; i++){
            const gridItem = document.createElement("div")
            gridItem.classList.toggle("grid-item")

            let length = (100/squaresPerSide) + "%"
            gridItem.style.width = length
            gridItem.style.height = length

            gridItem.addEventListener("mouseover",() => gridItem.style.backgroundColor = rgb)
            containerDiv.appendChild(gridItem)
        }
    }
}

function updateSize(){
    let newSize = prompt("How many squares per side would you like in your new grid?",16)
    document.querySelector("#container").innerHTML = ""
    loadGrid(newSize)
}