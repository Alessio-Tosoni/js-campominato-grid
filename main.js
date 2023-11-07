// let quadrato = document.createElement("div");
let generator = document.querySelector("generator")
generator.addEventListener("click", function(){
    let difficult = document.getElementById("difficult-selector").value;
    if (difficult == facile){
        let numcelle = 100;
        let grid = document.getElementById("grid")
        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square");
            grid.appendChild(cella)

            cella.addEventListener("click", function(){
                console.log("cella cliccata", i)
                cella.classList.toggle("evidenziata")
            })
        }
    }
})