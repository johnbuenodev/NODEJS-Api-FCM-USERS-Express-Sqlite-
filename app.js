import express from "express";
import cors from "cors";

import { createTableUser } from "./Usuario.js";
import router from "./routes.js";

const app = express();

createTableUser();

//app.use(cors());
//app.use(cors({origin: 'https://www.youtube.com/'})); 
//https://www.youtube.com/

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };

// const corsOptions = {
//     origin: function (origin, callback) {
//       const allowedOrigins = ['http://youtube.com', 'http://google.com']; // Origem permitida
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error('Acesso negado por CORS!'));
//       }
//     },
//     methods: ['GET', 'POST'], // Métodos permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
//   };
  
  // Usar CORS com as opções configuradas
app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

let PORT = 3000;

app.listen(PORT , () => console.log("Running in :", PORT));

// docker build -t api-user-fcm-test .
// docker run -it -p 127.0.0.1:9000:3001 --name teste-api api-user-fcm-test
// http://localhost:9000/usuarios

//solução foi rodar no node:12 que comporta rodar o sqlite
//Arquivos joguei todos na raiz para evitar o err de modulo não encontrado
//vou verificar isso quando tiver tempo

