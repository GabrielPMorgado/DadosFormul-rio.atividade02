import express from 'express';
const app = express();
const host='0.0.0.0';
const porta = 3000;







app.listen(porta, host,()=>{
    console.log(`Servidor executando em http://${host}:${porta}.`);
});
