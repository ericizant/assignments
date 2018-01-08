// ***ESCAPE ROOM***

// Game Objectives:

// 1. wake up and look around
// 2. explore room
// 3. look in mirror
// 4. take off robe
// 5. see wound in mirror
// 6. punch and shatter mirror
// 7. take glass shard
// 8. cut open wound
// 9. take key from wound
// 10. get medicine from hole
// 11. exit the room and win game


//Readline-Sync Module
const rs = require("readline-sync");


//Player Status

const isAlive = true; //health status


//Inventory Function & Variables

let bathRobe = true  //bathrobe item
let glassShard = false //glasShard item
let inv = ["bathrobe"]; //inventory array
let key = false //key item (false === not in possession)
let shattered = false //mirror status

let invFunc = function() {
    console.log(inventory);
}

//Commands & Action Modifiers

//CUT(): + [obj1], + (WITH) + [obj2]
//INVENTORY: = [items]
//LAY(): (DOWN/ON) + [obj1]
//LOOK: + (AT/IN/ON) || (BEHIND/BENEATH/UNDER/UNDERNEATH) + [obj1]
//PUNCH(): + [obj]
//PUT(): + [obj1] + (IN/ON) + [obj2]
//STAB(): + [obj1] + (AT/WITH) + [obj2]


//Item Desriptions & Command Repsonses

let bathrobe = "\nYou are wearing a cheap, fuzzy-gray bathrobe (with nothing underneath!)."; //LOOK "bathrobe"
let error = "\nIt's not clear what you want to do... Think it over and try again."; //DEFAULT *error message*
let inventory = ("\nYou currently have the following things: " + inv); //INVENTORY command
let lookCeiling = "\nThe ceiling is a dirty white. Something seems off about it.\nIt feels a little too low."; //LOOK "ceiling"
let lookCot = "\nThe cot you woke up on is a pile of rusty hinges and drooping green fabric. Various red stains cover its surface, not all of them your's."; //LOOK "cot"
let lookDoor = "\nThe door is made of metal, and it looks old but solid."; //LOOK "door"
// let lookError = (("\nIt's not clear what you want to look at.\nTry being more specific.") + (console.log(userInput))); //LOOK AT *error*
let lookFloor = "\nThe floor is composed entirely of chipped white chipped tiles, layered with a scattering of dust, debris, and detritus."; //LOOK "floor"
let lookKey = "\nAlhough there is a keyhole in the door you don't notice a key sitting around anywhere."; //LOOK "key"
let lookHole = "\nNear the door there is a hole in the wall. Perhaps someone tried to punch their way out?"; //LOOK "hole"
let lookInHole = "\nYou walk up to the hole and peer inside.\nDespite not being very large the hole looks deep. You cannot see anything inside the wall but blackness.\nThe hole is perhaps big enough to put your hand in." //LOOK IN "hole"
let lookMirror = "\nThe only real object inside the room is a tall mirror propped up against the wall.\nIt is scratched and foggy."; //LOOK "mirror"
let lookInMirror = function(shattered) {
    if (shattered === false) {
        console.log(mirrorReflection);
    } else if (shattered === true) {
        console.log(mirrorBroken);
    }
}; //LOOK IN "mirror"
let lookRoom = "\nThe room around you is rectangular in shape.\nIt is made of chipped white tiles, crumbling white plasterboard walls, and a low dropdown ceiling."; //LOOK "room"
let lookSelf = "\nGazing down at yourself you see that your only clothing is a faded blue robe. It isn't something you remember owning.\nYour skin, where visible, is covered in bruises and dried blood."; //LOOK "self"
let lookUnderCot = "\nThere is only about a foot of space between the sagging bottom of the cot and the tiled floor, much of it obscured by torn green fabric."; //LOOK UNDER "cot"
let lookWall = "\nThe four walls of the tiny room are nearly identical and euqally bland.\n.However, propped against one wall is a large mirror.\nOne wall has a dark, gaping hole about the size of your hand.\nIn the far corner is a dull brown door with a large golden handle and key-hole."; //LOOK "wall"


//GAME START

// Intro1 BRANCH
console.log("\nYou wake up in utter darkness.\nThere is the feeling of tight fabric sagging underneath your body. Something softly coarse envelops you.\nBut what you really notice is the pain--everywhere and nowhere, except for an exceptionally bright streak of it running up your left arm.\nThere is a omnipresent droning sound hanging in the oily-black air above you, as of vast machines moaning someplace far away.");


// Intro2 BRANCH
console.log("\nYour memory of the last few hours is fuzzy. You don't remember how you got here.\nIn fact, you can barely remember you own name...");
let nameInput = rs.question("\nHmmm... What was your name again? ");
let name = nameInput; //name command
console.log("\nThat's it! Your name is " + nameInput + ".\nNow if you can only remember how you got here...");


//Intro3 BRANCH
console.log("Suddenly the room is flooded with light! You squeeze your eyes shut in pain.\nAfter giving them some time to adjust you open your eyes.\nWhat you see makes you wish the room was dark again...\n\nAbove your head a garish fluorescent light stretches across the ceiling.\nIt casts a pale flickering light on a small white-tiled room.\nEverything looks to be in a state of disrepair and decay.");

let prompt = rs.question("\n(press any key to continue)\n"); //prompt


//Intro4 BRANCH
console.log("\nYou realize you are lying on a cot not much higher than the ground.\nYou sit up with a groan and are hit by a wave of pain and naseau.\n\nAfter your head stops spinning you look around the room.\nThere are only a few things to be seen:\n\nAcross the room from you there is a closed door." + lookDoor + "\n" + lookHole + "\n" + lookMirror);


//MAIN CONTROL LOOP

while(isAlive) {
    //command prompt:
    let userInput = rs.question("\nWhat do you want to do next?");
    userInput = userInput.toLowerCase(); //(input not case-sensitive)
    //INVENTORY command
    if ((userInput.includes("inventory") || userInput === ("inv") || userInput === ("i"))) {
        console.log(inventory);
    }
    //LOOK [undefined]
    else if ((userInput === ("look") || userInput === ("l")) && (userInput == (""))) {
        console.log(lookError);
    }
    //LOOK "bathrobe"
    else if (userInput.includes("robe")) {
        console.log(bathrobe);
    }
    //LOOK "ceiling"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("ceiling") || userInput.includes("up"))) {
        console.log(lookCeiling);
    }
    //LOOK "cot"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("cot") || userInput.includes("bed")) && !(userInput.includes("under") || userInput.includes("beneath") || userInput.includes("behind") || userInput.includes("bottom"))) {
        console.log(lookCot);
    }
    //LOOK UNDER "cot"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("under") || userInput.includes("beneath") || userInput.includes("behind") || userInput.includes("bottom")) && (userInput.includes("cot") || userInput.includes("bed"))) {
        console.log(lookUnderCot);
    }
    //LOOK "door"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("door") || userInput.includes("exit"))) {
        console.log(lookDoor);
    }
    //LOOK "floor"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("floor") || userInput.includes("down") || userInput.includes("ground"))) {
        console.log(lookCeiling);
    }
    //LOOK "hole"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("hole"))) {
        console.log(lookHole);
    }
    //LOOK "key"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("key"))) {
        console.log(lookKey);
    }
    //Key Found Branch:
        else if (userInput.includes("take") && userInput.includes("key")) {
            console.log("The key is in your hand. Your hand is in your pocket.");
            inv.push("key");
    }
    //LOOK "mirror"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("mirror") || userInput.includes("glass"))) {
        console.log(lookMirror);
    }
    //LOOK "robe"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("robe"))) {
        console.log("\nYou are wearing a cheap, fuzzy-gray bathrobe");
    }
    //LOOK "room"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("room") || userInput.includes("around"))) {
        console.log(lookRoom);
    }
    //LOOK "self"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("self") || userInput === ("me"))) {
        console.log(lookSelf);
    }
    //LOOK "wall"
    else if ((userInput.includes("look") || userInput === ("l")) && (userInput.includes("wall"))) {
        console.log(lookWall);
    }
    //DEFAULT *error message*
    else {
        console.log(error);
    }
}

//Working On:

// function roomList(objects) {
//     if (inv.bathrobe === false) {
//         console.log("A faded blue bathrobe lies crumpled up on the floor.");
//     } else if (inv.key === true) {
//         console.log("A shiny golden key lies on the ground.");
//     }
// }

// let inventory = ("inventory" || "i" || "inv");

// if ((userInput.includes("inventory") || userInput === ("inv") || userInput === ("i")) && !(userInput.includes("robe"))) {
//     console.log("\nYou currently have the following things: " + inv());

 
// else if (userInput.includes("open") && userInput.includes("door")) {
//     if (inv.includes("key")) {
//         console.log("You insert the key into the padlock and turn it.\nThe lock makes a clicking sound and you turn the handle.\nThe door slowly opens and you step out beyond...\n***YOU WIN***");
//         break;
//     } else {
//         console.log("The door is locked and will not open without a key.");
//     }
// }

//  // LOSE GAME

//  else if (userInput.includes("hand") && .includes("put")) {
//     console.log("You feel a sudden sharp stabbing pain in your hand,\nfollowed by the sensation of warm blood.\nYou suddenly grow weak and slump to the floor as your visions blurs.\nSorry... You have died!\n***GAME OVER***");
//     isAlive = false;
// }