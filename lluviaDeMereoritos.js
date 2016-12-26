//Variables
var campo, lienzo;
var teclado = {
  UP: 38,
  DOWN: 40
};
var coordenadas = {
  X: 5,
  Y: 20
};
var fondo = {
  url: "fondo.jpg",
  carga: false
}
var nave = {
  url: "nave.png",
  carga: false
}
var meteoro = {
  url: "meteoro.png",
  carga: false
}

fondo.img = new Image();
fondo.img.src = fondo.url;
fondo.img.addEventListener('load', cargarFondo);

nave.img = new Image();
nave.img.src = nave.url;
nave.img.addEventListener('load', cargarNave);

meteoro.img = new Image();
meteoro.img.src = meteoro.url;
meteoro.img.addEventListener('load', cargarMeteoro);


//eventos
var desplazamiento = 10;
campo = document.getElementById('espacio');
lienzo= campo.getContext('2d');
document.addEventListener('keydown', movimiento);

//Funciones
function cargarFondo(){
  fondo.carga = true;
  dibujar();
}

function cargarNave(){
  nave.carga = true;
  dibujar();
}

function cargarMeteoro(){
  meteoro.carga = true;
  dibujar();
}

function dibujar(){
lienzo.drawImage(fondo.img,0,0);
lienzo.drawImage(nave.img, coordenadas.X, coordenadas.Y);
lienzo.drawImage(meteoro.img, 350, 10);

}

function movimiento(evento){
    if(evento.keyCode == teclado.UP){
      if(coordenadas.Y < 21 ){
        coordenadas.Y = desplazamiento * 2;
      }
      else {
      coordenadas.Y = coordenadas.Y - desplazamiento;
      dibujar();}
    }
    if(evento.keyCode == teclado.DOWN){
      if(coordenadas.Y > 350){
        coordenadas.Y = 350;
      }
      else{
      coordenadas.Y = coordenadas.Y + desplazamiento;
      dibujar();}
    }

  }
