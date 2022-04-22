var jump = false

function jump1(){
    var  Gato = document.getElementById("Gato")
    var  Muro = document.getElementById("Muro")

    if (Gato.className != "jump"){
        Gato.classList.add("jump")
        jump=true
        setTimeout(()=>{
            Gato.classList.remove("jump")
            jump=false
        }, 800)

    function morte(){
        var MuroL=parseInt(window.getComputedStyle(Muro).getPropertyValue("left"))

        if(MuroL < 167 && jump == false){
            alert("Bateu no Muro, Fim de jogo!")
        }
    }
    setInterval(morte, 20)
    }
}