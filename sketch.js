//variáveis da bolinha
let xBolinha = 350;
let yBolinha = 225;
let diametro = 20;
let raio = diametro /2;

//velociade da bolinha
let velocidadeXBolinha = 7
let velocidadeYBolinha = 7

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 190;
let raqueteComprimento = 10;
let raqueteAltura = 80;

//variáveis da do oponente
let xRaqueteOponente = 685;
let yRaqueteOponente = 190;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("btrilha.mp3");
  ponto = loadSound("bponto.mp3");
  raquetada = loadSound("braquetada.mp3");
}

function setup() {
  createCanvas(700, 450);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0){
   velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
   velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(87)){
    yRaquete -=10;
  }
  if (keyIsDown(83)){
    yRaquete +=10;
  }
}  
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  } 
}

function verificaColisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
   velocidadeXBolinha *= -1; 
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente +=10;
  }
}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(18);
  fill(255)
  text(meusPontos, 275, 30,)
  text(pontosDoOponente,425, 30,)
}

function marcaPonto(){
  if (xBolinha > 690){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}