import { Champ } from "./champs/Champ.js";
import { Background } from "./ui/basic-ui.js";
import { Player } from "./champs/Player.js";

const jinx = new Champ("Jinx", 100 ,25 ,10 , 3)
console.log(jinx);
const player = new Player();
const background = new Background();
console.log(background);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//!!!!!=>   []-pole, {}-objekt  <=!!!!!//
const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});




const gameloop = () =>{
    //console.log(keys);
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
};

const clearCanvas = () =>{
    background.draw(ctx);
};

const update = () =>{
jinx.update();
player.update(keys);
Champ.detectHit(player.dart,jinx);
}

const render = () =>{
jinx.draw(ctx);
player.draw(ctx);
player.dart.draw(ctx);
}

const getFps = () =>{

}



window.onload = () =>{
    window.requestAnimationFrame(gameloop);
}
