let screen=document.getElementById('screen')
let f_val="";
let opera="";
function numbers(val){

    screen.innerHTML+=val
}

function operator(params) {
    opera=params
    f_val=screen.innerHTML
    screen.innerHTML=""
}

function answer(){
    if (opera=="+") {
        screen.innerHTML=Number(f_val)+Number(screen.innerHTML)
    }
    if (opera=="-") {
        screen.innerHTML=Number(f_val)+Number(screen.innerHTML)
    }
    if (opera=="/") {
        screen.innerHTML=Number(f_val)+Number(screen.innerHTML)
    }
    if (opera=="*") {
        screen.innerHTML=Number(f_val)+Number(screen.innerHTML)
    }
}