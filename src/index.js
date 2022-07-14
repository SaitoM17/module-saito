const messages = [
    "Hola",
    "Simba",
    "Nicolay",
    "Diego",
    "Laura"
];

const randomMsg = () => {
    const messages = messages [Math.floor(Math.random() * messages.length)];
    console.log(messages);
};

module.export = {randomMsg};