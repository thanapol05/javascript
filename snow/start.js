(() => {
    function setup(){
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth;
        canvas.hight = window.innerHeight;

        return{
            canvas,
            canvasContext:canvas.getContext('2d'),
            numberOfSnowBalls:250
        }
    }
    function random(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    function createSnowBalls(canvas,numberOfSnowBalls){
       return [...Array(numberOfSnowBalls)].map(() =>{
           return{
             x:random(0,canvas.width),
             y:random(0,canvas.hight)
           }
       })
       
    }
    function drawSnowBall(canvasContext,snowBall){
        canvasContext.beginPath();
        canvasContext.arc(snowBall.x, snowBall.y, 4, 0, Math.PI*2);
        canvasContext.fillStyle = 'rgb(245, 201, 237,1)';
        canvasContext.fill();
    }
    function run(){
        const {canvas,canvasContext,numberOfSnowBalls} = setup();
        const snowBalls = createSnowBalls(canvas,numberOfSnowBalls);
        snowBalls.forEach((snowBall) => drawSnowBall(canvasContext,snowBalls[0]));
    }
    run();
})();