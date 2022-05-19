require("dotenv").config();

if (!process.env.TOKEN && !process.env.KEY) {
    throw new Error("No hay configuración con API KEY y con TOKEN");
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(
    cardTitle,
    "Launch X Card Description",
    "00000000000000000000000001",
    function (error, trelloCard) {
        if (error) {
            console.log("Could not add card:", error);
        } else {
            console.log("Added card:", trelloCard);
        }
    }
);
