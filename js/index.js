//56.38
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
];

let score=0;
let food ={x:5 ,y:6};


//Game Functions
function main(ctime){

window.requestAnimationFrame(main);
if(ctime-lastPaintTime/1000<1/speed){
    return
}

lastPaintTime=ctime;

gameEngine();


function isCollide(sarr){
    return false;
}

//If food eaten 

if(SnakeArray[0].y==food.y &&SnakeArray[0].x=== food.x)
{
    SnakeArray.unshift({x:SnakeArray[0].x + direction.x , y:SnakeArray[0].y +direction.y})
    food ={x:Math.round(a+(b-a)*Math.random())}
    let a =2;
    let b =16
    food ={x:Math.round(a+(b-a)*Math.random())};
}


//Moving the snake
for(let i =SnakeArray.length -2 ; i>0;i--){
    SnakeArray[i+1]={...SnakeArray[i]};
}

SnakeArray[0].x +=inputDir.x;
SnakeArray[0].y +=inputDir.y;

function gameEngine(){
    //Updating the Snake Variable
    if(isCollide(SnakeArray)){
        gameOverSound.play();
        musicSound.pause();
        direction={x:0 , y:0};
        alert("Game over , press any key to play again");
        SnakeArray=[{x:13,y:13}];
        musicSound.play();
        score=0;
    }



    



    //Render the Snake,food
    board.innerHTML=""; //tO MAKE ONE sNAKE ONLY INSIDE THE baorad
    SnakeArray.forEach((e,index)=>{
        snakeelement =document.createElement('div');
        snakeelement.style.gridRowStart =e.y;
        snakeelement.style.gridColumnStart =e.x;
        snakeelement.classList.add('snake')
        if(index === 0)
        {
            snakeelement.classList.add('food')
        }else{
            snakeelement.classList.add('snake')
        } 
        board.appendChild(snakeelement);   
    })

    //Display the food element 

   
        foodelement =document.createElement('div');
        foodelement.style.gridRowStart =food.y;
        foodelement.style.gridColumnStart =food.x;
        foodelement.classList.add('food')
        board.appendChild(foodelement);
    
    
    
}
}



//Main Logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir ={x:0 ,y:1}
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
        console.log("Arrowup");
        inputDir.x=0;
        inputDir.y=-1;
        break;

        case "ArrowDown":
        console.log("ArrowDown");
        inputDir.x=0;
        inputDir.y=1;
        break;

        case "ArrowLeft":
        console.log("ArrowLeft");
        inputDir.x=-1;
        inputDir.y=0;
        break;

        case "ArrowRight":
        console.log("ArrowRight");
        inputDir.x=1;
        inputDir.y=0;
        break;

        default:
        break; 
        
    }
})
