const progreso= document.getElementById("progreso")
const circulos = document.querySelectorAll(".circulo")
const preview = document.getElementById("preview")
const next = document.getElementById("next")
console.log(circulos.length)
console.log(progreso)
let c=0
let suma=0

const avanzar=()=>{
    suma+=30
    progreso.style.width=`${suma}%`

    if (suma<=0){
        preview.disabled=true
    }else{
        preview.disabled=false
        }
        
    if(suma>=90){
        next.disabled=true
    }else{
        next.disabled=false
        
    }
    c++
    circulos[c].classList.add("active")
    
    }

const retroceder=()=>{
    suma-=30
    progreso.style.width=`${suma}%`
    if (suma<=0){
        preview.disabled=true
    }else{
        preview.disabled=false
    }

    if(suma>=90){
        next.disabled=true
    }else{
        next.disabled=false
        
    }
    
    circulos[c].classList.remove("active")
    c--
}