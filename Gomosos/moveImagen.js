let mapaBackground = new Image()
mapaBackground.src= "./assets/hexagonos.png"
let intervalo


const divVermapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

class fotogramas {
    constructor(imagen,nombre){
        this.imagen = imagen
        this.nombre = nombre
        this.velocidadx=0
        this.velocidady=0
    }
}

let matrix = new fotogramas("./assets/matrix.png","matrix")


function dibujarLienzo() {
    let lienzo = mapa.getContext("2d")
    let imagenAmover = new Image()
    imagenAmover.src = matrix.imagen
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width=1251,
        mapa.height=530
   )
    lienzo.drawImage(
        imagenAmover,
        170,
        17,
        100,
        100
    )

    //console.log(matrix.imagen)
}

function moverDerecha(){
    matrix.velocidadx=5
}

//intervalo = setInterval(dibujarLienzo,1000)