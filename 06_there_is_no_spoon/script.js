var phone = {  
    name: "Samsung Galaxy S7 Edge",
    color: "Black",
    brand: "Samsung",
    owner: "Eric Izant",
    returnInstructions: function() {
        console.log("Please return me to my owner " + phone.owner + ".");
     }
}

var waterBottle = {  
    color: "Gray",
    liquidOunces: 16
    empty: false,
    reFill: function() {
        console.log("Please re-fill me!");
    }
}

var computer = {  
    type: "laptop",
    brand: "Apple",
    owner: "Eric Izant"
    powerSwitch: function() {
        console.log("Turn me on by pressing my button!");
     },
    specifications: {
        processor: "1.2 GHz Intel Core M",
        memory: "8 GB 1600 MHz DDR3",
        graphics: "Intel HD Graphics 5300 1536 MB"
    }
}

var trashCan = {  
    color: "Gray",
    size: "Large",
    Full: true,
    cleaningInstructions: function() {
        console.log("Please empty the trash daily.");
     }
}

var myBag = {  
    color: "Brown",
    material: "Leather"
    yearsAge: 7,
    wateringInstructions: function() {
        console.log("Please water once a day.");
     }
}

var wallPainting = {  
    name: "unknown"
    medium: "acryllic",
    size: "large",
    aestheticValue: function() {
        console.log("Please rate my aesthetic value on a scale from 1 - 10.");
     }
}

var classScreen = {  
    isViewable: false,
    sizeInches: 100,
    currentContents: "Lecture Notes",
    makeViewable: function() {
        console.log("Please dim the lights in the classroom in order to see the screen better.");
     }
}

var windowPlant = {  
    type: "Flower",
    price: 2,
    color: "Purple",
    wateringInstructions: function() {
        console.log("Please water once a day.");
     }
}

var lights = {  
    on: true,
    lengthFeet: 50, 
    type: "Vintage String Lights",
    replaceBulb: function() {
        console.log("Here are the instructions to replace a burnt-out bulb:");
    }
}