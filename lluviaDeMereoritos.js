var campo, lienzo;
var teclado = {
  UP: 38,
  DOWN: 40
};
campo = document.getElementById('espacio');
lienzo= campo.getContext('2d');
var img = new Image();
var img2 = new Image();
img.src = "fondo.jpg";
img2.src = "nave.png";
img.onload = function dibujar(){
  lienzo.drawImage(img, 0, 0);
  lienzo.drawImage(img2, 0, 0);

}
