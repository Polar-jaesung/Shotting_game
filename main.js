// 캔버스 셋팅
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;

document.body.appendChild(canvas);

let bgImg,spaceshipImg,bulletImg,enemyImg,gameoverImg;

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

function render(){
    ctx.drawImage(bgImg,0,0, canvas.width, canvas.height); 
}
function main(){
    render()
    requestAnimationFrame(main)

}

imgLoad();
main();