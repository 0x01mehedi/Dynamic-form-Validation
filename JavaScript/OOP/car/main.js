const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
//------------------------------------------//

function degToRad(deg){
    return (Math.PI / 180) * deg;//Degree to Radian
}

//-----------------------//


class Car{
    constructor(x,y,rotate){
        this.x=x;
        this.y=y;
        this.rotate=rotate;
    }
    draw(){      
        
        const image = new Image(); 
        image.src = "car.png";      
        ctx.save(); // save current stat
        ctx.rotate(this.rotate*Math.PI/180);
        ctx.translate(0,0); // change origin
        ctx.drawImage(image,this.x, this.y);       
       
        //ctx.beginPath(); 
        //ctx.arc(20,0,16,0,180);
        //ctx.rect(10, 20, 100, 20);
        //ctx.fill();
        //ctx.stroke();
        ctx.restore();
    }
    update(){
      //this.x+=2;
      //this.rotate+=1;      
      
    }
   
}//end Car

class Ball{
    constructor(x,y,r,color,speed){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.speed=speed;
    }
    draw(){
        ctx.beginPath();   
        ctx.arc(this.x, this.y,this.r, 0, degToRad(360));
        ctx.fillStyle=this.color;
        ctx.strokeStyle="green";
        ctx.stroke();
        ctx.fill();
        ctx.lineWidth=5;
    }

    move(){
        if(this.x>width){
            this.speed=-this.speed;
        }
        if(this.x<0){
            this.speed=-this.speed;
        }

       this.x+=this.speed;
    }
}


let car =new Car(0,20,0);
let ball=new Ball(50,100,10,"red",1);


//Game Loop
function loop(){
    ctx.clearRect(0,0,width,height,canvas);
    car.draw();
    ball.draw();
    ball.move(); 
    car.update();
    requestAnimationFrame(loop);
}

  requestAnimationFrame(loop);