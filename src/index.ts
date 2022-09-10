//instalar npm i @types/express -D para que no se queje react, -D (dependecias de desarrollo)para que no se instalen en otra compu, si se usa esto en otra misma
import express from 'express'; // ESModules , UTILIZAMOS ESTE PERO SE COMPILA EN COMMONJS
//const express = require('express') => commonJS

import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json()); //middleware que transforma la req.body a un objeto json,
//asi los post la informacion que tu envias a tus endpoint de la api trnforma automatico

const PORT = 3000;
//endpoint
//_ ignora errores 
app.get('/ping', (_req, res)=> {
    console.log('someone pinged here!!');
    res.send('pong');
});


app.use('/api/diaries', diaryRouter);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    
});