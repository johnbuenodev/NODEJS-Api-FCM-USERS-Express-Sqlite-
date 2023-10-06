import { Router }  from 'express';

import { deleteUsuarioByID, getAllUsuarios, getUsuarioByID, insertUsuario, updateUsuario } from './src/controllers/usuario.js';

const router = Router();

router.get("/", function (req, res){
    res.json({
    "message":"API - Users - Notification - FCM",
    "statusCode": 200
    });
});
  
router.get('/usuarios', getAllUsuarios);

router.get('/usuario', getUsuarioByID);

router.post('/usuario', insertUsuario);

router.delete('/usuario', deleteUsuarioByID);

router.put('/usuario', updateUsuario);


export default router;