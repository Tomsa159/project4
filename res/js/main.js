const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//!!!!!=>   []-pole, {}-objekt  <=!!!!!

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});




const gameloop = () =>{
    console.log(keys);
    //resize canvas
    resizeCanvas();

    //clear canvas
    clearCanvas();

    //update
    update();

    //render
    render();

    //fps
    getFps();

    window.requestAnimationFrame(gameloop);
}

const resizeCanvas = () =>{
    canvas.width = 1280;
    canvas.height = 720;
}

const clearCanvas = () =>{
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1280,720);
}

const update = () =>{

}

const render = () =>{

}

const getFps = () =>{

}



window.onload = () =>{
    window.requestAnimationFrame(gameloop);
}
