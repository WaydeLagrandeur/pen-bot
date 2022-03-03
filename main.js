/*
Project: PenBot
Purpose: Test anti-spamming measures on CONSENTING websites
Author: Wayde Lagrandeur
Date: Feb. 26, 2022
NOTE: THIS IS A SPECIFIC PROJECT NOT MEANT TO BE REPLICATED
IT IS CALIBRATED JUST FOR MY LOCAL MACHINE
*/

var robot = require("robotjs");
init()

async function init() {

    var mouse = robot.getMousePos();
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
    robot.setMouseDelay(6);
    let count = 1;

    //Every minute, the botThings() function will fire.
    //The every minute is to hopefully bypass the spam filter
    // while(true) {
    
    //     botThings(count)
    //     await sleep(600000);
    //     count++;  
    // } 
}
 
function sleep(ms) {
return new Promise((resolve) => {
    setTimeout(resolve, ms);
});
}

async function botThings(nLoop) {
    console.log("Starting bot things! Loop: " + nLoop);

    //Refresh page and move to the bottom of the page
    robot.moveMouse(96, 63);
    robot.mouseClick();

    for(let j = 0; j < 15; j++) {
        robot.keyTap("pagedown");
        //console.log("Pagedown pressed");
    }

    //Bring up the dev options (Used for captcha solving later)
    robot.moveMouse(480, 510);
    robot.mouseClick("right");
    robot.moveMouse(595, 838);
    robot.mouseClick("left");

    //Copy Username from text file and copy to input field
    robot.moveMouse(1693, 467);
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("A");
    robot.keyTap("C");
    robot.keyToggle("control", "up");

    //Paste the username from a notepad
    robot.moveMouse(168, 510);
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("V");
    robot.keyToggle("control", "up");

    //Copy Navy Seal CopyPasta to comments
    robot.moveMouse(1716, 130);
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("A");
    robot.keyTap("C");
    robot.keyToggle("control", "up");
    robot.moveMouse(322, 510);
    robot.mouseClick();
    robot.typeStringDelayed("" + nLoop, 3600);
    robot.keyToggle("control", "down");
    robot.keyTap("V");
    robot.keyToggle("control", "up");
    
    //Below grabs the equation from the Captcha from the dev tool screen, and copies it
    //move mouse to first side of equation
    robot.moveMouse(241, 746);
    //robot.mouseClick("left", true);
    //await sleep (750);
    robot.mouseClick();
    robot.mouseClick("left", true);
    robot.keyToggle("control", "down");
    robot.keyTap("C");
    robot.keyToggle("control", "up");

    //Done copying equation, now move it to notepad
    //After moving it to notepad, we "Trim" the equation to make it compatible with our calculator
    robot.moveMouse(1595, 315)
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("A");
    robot.keyTap("V");
    robot.keyToggle("control", "up");
    robot.keyTap("backspace");
    robot.moveMouse(1595, 315);
    robot.mouseClick();

    for(let i = 0; i < 8; i++) {
        robot.keyTap("backspace");
    }
    //Copy equation
    robot.keyToggle("control", "down");
    robot.keyTap("A");
    robot.keyTap("C");
    robot.keyToggle("control", "up");

    //Paste it to calculator
    robot.moveMouse(1356, 748);
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("V");
    robot.keyToggle("control", "up");
    robot.keyTap("enter");

    //Copy answer
    robot.moveMouse(1559, 650);
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("A");
    robot.keyTap("C");
    robot.keyToggle("control", "up");

    //Paste answer to capcha
    robot.moveMouse(480, 510);
    robot.mouseClick();
    robot.keyToggle("control", "down");
    robot.keyTap("V");
    robot.keyToggle("control", "up");

    //Click Post
    robot.moveMouse(635, 510);
    robot.mouseClick();
    await sleep(4000);
    console.log("Done slep");
}

