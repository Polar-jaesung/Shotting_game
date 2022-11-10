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

// 총알 저장하는 리스트
let bulletList =[]

function bullet(){
    this.x =0
    this.y =0
    this.init = function(){
        this.x = spaceship_x+22;
        this.y = spaceship_y-8;
        
        bulletList.push(this)
    }
    this.update = function(){
        this.y -= 7;
    }
};


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
     keysDown[event.keyCode]=true;   
    });
     document.addEventListener('keyup', function(event){
     delete keysDown[event.keyCode]   

     if(event.keyCode == 32){
        creatBullet() //총알 생성
     }
     })
}

function creatBullet(){
    console.log('총알!!');
    let b = new bullet()
    b.init()
    console.log('새 총알 리스트',bulletList);
};

// 좌 / 우 버튼 누리면 우주선 움직이는 이벤트
function updatePosition(){
    // 오른쪽
     if( 39 in keysDown){
        spaceship_x +=3;
    } 
     if( 37 in keysDown){
        spaceship_x -=3;
    }
     if( spaceship_x <=0){
     spaceship_x=0;
    }
     if(spaceship_x >= canvas.width-60){
     spaceship_x =canvas.width-60;
      }

    //총알이 y좌표 따라서 이동하는 함수 호출
      for(let i=0; i<bulletList.length; i++){
        bulletList[i].update()
      }
}

function render(){
    ctx.drawImage(bgImg,0,0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImg,spaceship_x, spaceship_y);
    
    for(let i=0; i<bulletList.length; i++){
        ctx.drawImage(bulletImg,bulletList[i].x, bulletList[i].y,15,15)
    }
}
function main(){
    updatePosition(); //좌표값을 계속 업데이트하고
    render();  // 보여주고
    requestAnimationFrame(main);
}

imgLoad();
setKeyboardListener();
main();