require("dotenv").config();
let Trello = require("trello");

// eslint-disable-next-line no-undef
if (!process.env.TOKEN && !process.env.KEY) {
    throw new Error("No hay configuración con API KEY y con TOKEN");
}

// eslint-disable-next-line no-undef
let trello = new Trello(process.env.KEY, process.env.TOKEN);
let cardTitle = `HOLA DESDE VSCODE ${new Date()}`;
const idList = "61d790f1e8d5cd5b0ccf9278";

console.log("::: EJECUTANDO! :::\n");

trello.addCard(
    cardTitle,
    "mabvmex tested this code",
    idList,
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
