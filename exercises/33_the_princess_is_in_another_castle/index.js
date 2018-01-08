class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.namePicked = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.namePicked = namePicked;
    }
    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                this.star = false;
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
        }
    }
    gotPowerup() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                this.star = true;
        }
    }
    addCoin() {
        this.totalCoins++;
        if (this.totalCoins === 15) {
            this.gameActive = false;
        }
    }
    print() {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}


let player1 = new Player("Eric");
player1.setName("Mario");


function rand(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


while (player1.gameActive) {
    switch (rand(2, 0)) {
        case 0:
            player1.gotHit();
            break;
        case 1:
            player1.gotPowerup();
            break;
        case 2:
            player1.addCoin();
    }
    player1.print();
}


if (player1.status === "Dead") {
    console.log("YOU LOST!!");
} else {
    console.log("YOU WIN & GET RICH!!!!");
}