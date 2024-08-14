let palavra;

function setup() {
  createCanvas(700, 700);
  
  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  let palavras = ["Cristiano Ronaldo", "Neymar Jr", "Lionel Messi"];
  return random(palavras);
}

function inicializaCores(){
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont("asanoFont")
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  
  
  let texto = palavraParcial(0, width);
  text(texto, 350, 250);

}