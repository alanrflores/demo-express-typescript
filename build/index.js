"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//instalar npm i @types/express -D para que no se queje react, -D (dependecias de desarrollo)para que no se instalen en otra compu, si se usa esto en otra misma
const express_1 = __importDefault(require("express")); // ESModules , UTILIZAMOS ESTE PERO SE COMPILA EN COMMONJS
//const express = require('express') => commonJS
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la req.body a un objeto json,
//asi los post la informacion que tu envias a tus endpoint de la api trnforma automatico
const PORT = 3000;
//endpoint
//_ ignora errores 
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!');
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
