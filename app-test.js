require("dotenv").config();

// eslint-disable-next-line no-undef
if (!process.env.TOKEN && !process.env.KEY) {
    throw new Error("No hay configuración con API KEY y con TOKEN");
}

let Trello = require("trello");
// eslint-disable-next-line no-undef
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(
    cardTitle,
    "Launch X Card Description",
    "61d790f1e8d5cd5b0ccf9278",
    function (error, trelloCard) {
        if (error) {
            console.log("Could not add card:", error);
        } else {
            console.log("Added card:", trelloCard);
        }
    }
);

/* 
tablero: 61d790f1e8d5cd5b0ccf9277
lista: 61d790f1e8d5cd5b0ccf9278
tarjetas: 6285419cccac5b8e591eeaa1 (POSTMAN API)
*/
