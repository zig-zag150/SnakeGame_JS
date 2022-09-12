//Game Constants and Variable
let direction ={x:0,y:0};
const foodSoound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 0.5;
let lastPaintTime=0;
let SnakeArray =[
    {   
        x:13,
        y:15
    }
]


//Game Functions
function main(ctime){

window.requestAnimationFrame(main);
if(ctime-lastPaintTime/1000<1/speed){
    return
}

lastPaintTime=ctime;

gameEngine();


function gameEngine(){
    //Updating the Snake Variable




    //Render the Snake,food
    board.innerHTML=""; //tO MAKE ONE sNAKE ONLY INSIDE THE baorad
    SnakeArray.forEach((e,index)=>{
        snakeElement =document.createElement('div');
        snakeElement.style.gridRowStart =e.y;
        snakeElement.style.gridColumnStart =e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement)
    })
    
}




}



//Main Logic starts here
window.requestAnimationFrame(main)
