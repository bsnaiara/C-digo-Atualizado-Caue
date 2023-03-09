var campo, campoImg;
var jogador, jogadorImg;
var inicio, inicioImg;
var start, startImg;
var goleiro, goleioImg;
var goleiroOP, goleiroOPImg;
var jogador1, jogador2;
var jogador1Img, jogador2Img;


var posX = [];
var posY = [];

function preload(){
campoImg = loadImage("assets/CampoFutebol.png");
jogadorImg = loadImage("assets/Jogador1.png");
inicioImg = loadImage("assets/telaDeFundo.jpg");
startImg = loadImage("assets/StartButton.jpg");
goleiroImg = loadImage("assets/goleiro-removebg-preview.png");
goleiroOPImg = loadImage("assets/goleiroOP-removebg-preview.png");
jogador2Img = loadImage("assets/jogadorOP-removebg-preview.png");
jogador1Img = loadImage("assets/Jogador1.png")

}

function setup(){
  createCanvas(windowWidth - 30, windowHeight - 25);


   posX = [width/2 - 200, width/2-50,width/2 - 200, width/2-50 ];
   posY = [height/2 - 100,height/2 - 100, height/2 + 200, height/2 + 200 ];
  //imagem de plano de fundo
campo = createSprite(displayWidth/2 , displayHeight/2- 40, 20, 20);
campo.addImage(campoImg);
campo.scale = 1.2;

jogador = createSprite(displayWidth/2, displayHeight/2, 20, 20);
jogador.addImage(jogadorImg);
jogador.scale = 0.5;


goleiro = createSprite(width - 1080, height/2+50);
goleiro.addImage(goleiroImg);
goleiro.scale =  0.4

goleiroOP = createSprite(width - 120, height/2+50);
goleiroOP.addImage(goleiroOPImg);
goleiroOP.scale = 0.4;

criarJogadores();

inicio = createSprite(displayWidth/2, displayHeight/2, width, height);
inicio.addImage(inicioImg);
inicio.scale = 0.85;



start = createSprite(displayWidth/2-40, displayHeight/2-100);
start.addImage(startImg);
start.scale = 0.25;





}

function draw() {
  
  background("black");

  if(mousePressedOver(start)){
    start.visible = false;
    inicio.visible = false;
  }

  if(keyDown("UP_ARROW")){
    jogador.y -= 5;
  }

  if(keyDown("DOWN_ARROW")){
    jogador.y += 5;
  }

  if(keyDown("LEFT_ARROW")){
    jogador.x -= 6;
  }

  if(keyDown("RIGHT_ARROW")){
    jogador.x += 6;
  }

  console.log(jogador.x);

  //1283


  drawSprites();
        

}

function hide() {

  
    start.visible = false;
    inicio.visible = false;
}

function criarJogadores(){

    for(var c = 0; c<4; c++){
      jogador1 = createSprite(posX[c], posY[c]);
      jogador1.addImage(jogador1Img);
      jogador1.scale = 0.5;
     

    }
}