// 캔버스 셋팅
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;

document.body.appendChild(canvas);

let bgImg,spaceshipImg,bulletImg,enemyImg,gameoverImg;

 // 우주선 좌표
let spaceship_x=  canvas.width/2 - 30;
let spaceship_y= canvas.height -65 ;

function imgLoad(){
    bgImg = new Image();
    spaceshipImg = new Image();
    bulletImg = new Image();
    enemyImg = new Image();
    gameoverImg = new Image();

    bgImg.src ='/imgs/background.jfif';
    spaceshipImg.src='/imgs/spaceship.png';   
    bulletImg.src ='/imgs/bullet.png';
    enemyImg.src = '/imgs/enemy.png';
    gameoverImg.src ='/imgs/gameover.png';
}
// 버튼키 입력되는 이벤트
let keysDown={}
function setKeyboardListener(){
    document.addEventListener('keydown',function(event){
    keysDown[event.key]=true;
    console.log('key down ??',keysDown);
 });
 document.addEventListener('keyup', function(event){
    delete keysDown[event.key]
    console.log('클릭후 ??',keysDown);
 })
}

function render(){
    ctx.drawImage(bgImg,0,0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImg,spaceship_x, spaceship_y) 
}
function main(){
    render()
    requestAnimationFrame(main)
}

imgLoad();
setKeyboardListener();
main();