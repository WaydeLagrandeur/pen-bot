/*
Project: PenBot
Purpose: Test anti-spamming measures on CONSENTING websites
Author: Wayde Lagrandeur
Date: Feb. 26, 2022
NOTE: THIS IS A SPECIFIC PROJECT NOT MEANT TO BE REPLICATED
IT IS CALIBRATED JUST FOR MY LOCAL MACHINE
*/

var robot = require("robotjs");
init();

async function init() {

    let nPosts = 0;
    //while(true) {
        var mouse = robot.getMousePos();
        console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
    //}

    
    robot.setMouseDelay(6);
    let count = 1;

    //Every minute, the botThings() function will fire.
    //The every minute is to hopefully bypass the spam filter

    while(true) {
    
        await botThings(count);
        count++;
        nPosts++; 

        if(nPosts >= 4) {
            await changeLocation();
            nPosts = 0;
        }

        await sleep(3000);  
    } 
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
    await sleep(2000);

    // robot.moveMouse(96, 250);
    // robot.mouseClick();

    for(let j = 0; j < 6; j++) {
        await sleep(500);
        robot.keyTap("tab");
        //console.log("Pagedown pressed");
    }
    robot.moveMouse(80, 510);
    robot.mouseClick();
    robot.keyTap("pagedown");

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

    //Copy CopyPasta to comments
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
    //robot.typeStringDelayed("" + nLoop, 3600);
    
    //Below grabs the equation from the Captcha from the dev tool screen, and copies it
    //move mouse to first side of equation
    robot.moveMouse(248, 780);
    //robot.mouseClick("left", true);
    //await sleep (750);
    //robot.mouseClick();
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
    robot.moveMouse(560, 517);
    robot.mouseClick();
    await sleep(1000);
    robot.moveMouse(328, 314);
    await sleep(1000);
    robot.mouseClick();
    await sleep(1000);
    robot.moveMouse(145, 345);
    await sleep(1000);
    robot.mouseClick();
    await sleep(2000);
    // robot.moveMouse(150, 343);
    // await sleep(2000);
    // robot.mouseClick();
    // await sleep(2000);
    // robot.moveMouse(331, 313);
    // await sleep(2000);
    // robot.mouseClick();
    // await sleep(2000);
    console.log("Done loop");
}

async function changeLocation() {
    //Access Nord screen
    robot.moveMouse(1060, 1060);
    robot.mouseClick();
    await sleep(500)

    //Disconnect and confirm
    robot.moveMouse(1400, 570);
    robot.mouseClick();
    await sleep(500);
    robot.moveMouse(1533, 715);
    robot.mouseClick();
    await sleep(500);

    //Select Double VPN
    robot.moveMouse(807, 207);
    robot.mouseClick();
    await sleep(3000);
}
