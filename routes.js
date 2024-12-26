import { Router }  from 'express';
import cors from "cors";

import { deleteUsuarioByID, getAllNotification, getAllUsuarios, getUsuarioByID, insertNotification, insertUsuario, updateUsuario } from './Usuario.js';

const router = Router();

router.get("/", function (req, res){
    res.json({
    "message":"API - Users - Notification - FCM",
    "statusCode": 200
    });
});

router.get('/v1/notificacoes', getAllUsuarios);

router.get('/v1/usuarios', getAllUsuarios);

router.get('/v1/usuario', getUsuarioByID);

router.post('/v1/usuario', insertUsuario);

router.post('/v1/notification', insertNotification);

router.get('/v1/notifications', getAllNotification);

router.delete('/v1/usuario', deleteUsuarioByID);

router.put('/v1/usuario', updateUsuario);


export default router;