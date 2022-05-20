require("dotenv").config();
const Trello = require("./main"); // Desde archivo main del proyecto forkeado

// eslint-disable-next-line no-undef
if (!process.env.TOKEN && !process.env.KEY) {
    throw new Error("No hay configuración con API KEY y con TOKEN");
}

// eslint-disable-next-line no-undef
let trello = new Trello(process.env.KEY, process.env.TOKEN);
let cardTitle = `== Mi propia tarjeta desde TRELLO API ==\n ${new Date()}`;
const idList = "61d790f1e8d5cd5b0ccf9278";

console.log("::: EJECUTANDO! :::\n");

trello.addCard(
    cardTitle,
    "El segundo parametro es la descripción de la tarjeta",
    idList,
    (error, trelloCard) => {
        if (error) {
            console.log("Podría no haberse creado la tarjeta", error);
        } else {
            console.log("Tarjeta agregada:", trelloCard);
        }
    }
);
