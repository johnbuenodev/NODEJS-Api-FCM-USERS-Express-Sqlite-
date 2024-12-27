import openDB from "./openDB.js";

export async function createTableUser() {
    openDB().then( db => {
      db.exec('CREATE TABLE IF NOT EXISTS Usuario (id INTEGER PRIMARY KEY, nome TEXT, tokenMessage TEXT, nivel INTEGER)'),
      db.exec('CREATE TABLE IF NOT EXISTS Notification (id INTEGER PRIMARY KEY, articleId TEXT, secao TEXT, titulo TEXT, texto TEXT, publicado TEXT, dataPublicacaoJornal TEXT, dataPublicacao TEXT, dataCriacao TEXT, lido INTEGER)')
    }
    );
}

export async function insertUsuario(req, res) {
  
  if(req.body.nome && req.body.nivel) {
    //INSERT OR REPLACE INTO
    openDB().then( async db => {
     await db.run('INSERT INTO Usuario (nome, nivel) VALUES (?,?)',[req.body.nome, req.body.nivel])
     .then( async resultInsert => 

      await db.get('SELECT * FROM Usuario WHERE id=?',[resultInsert.lastID])
       .then( async resultSelect => 
        res.json({
          "usuario": resultSelect,
          "statusCode": 201
        })));
    }

   );

  } else {
    res.json({
      "message":"Informe os dados",
      "statusCode": 400 
    });
  }
}

/*
Notification
id INTEGER PRIMARY KEY 
articleId TEXT 
secao TEXT 
titulo TEXT 
texto TEXT 
publicado TEXT 
dataPublicacaoJornal TEXT 
dataPublicacao TEXT 
dataCriacao TEXT 
lido INTEGER */

export async function insertNotification(req, res) {
  
  if(req.body.nome && req.body.nivel) {
    //INSERT OR REPLACE INTO
    openDB().then( async db => {
     await db.run('INSERT INTO Notification (articleId, secao, titulo, texto, publicado, dataPublicacaoJornal, dataPublicacao, dataCriacao, lido) VALUES (?,?,?,?,?,?,?,?,?)',[req.body.nome, req.body.nivel])
     .then( async resultInsert => 

      await db.get('SELECT * FROM Notification WHERE id=?',[resultInsert.lastID])
       .then( async resultSelect => 
        res.json({
          "notification": resultSelect,
          "statusCode": 201
        })));
    }

   );

  } else {
    res.json({
      "message":"Informe os dados",
      "statusCode": 400 
    });
  }
}

export async function getAllNotification(req, res) {

  openDB().then( async db => {
    await db.all('SELECT * FROM Notification')
    .then(
      resultDB => {
        res.json(
          //{
          resultDB
          //"notification": resultDB,
          //"statusCode": 200
      //  }
      );
      }
    )
  });

}

export async function getAllUsuarios(req, res) {

  openDB().then( async db => {
    await db.all('SELECT * FROM Usuario')
    .then(
      resultDB => {
        res.json({
          "usuarios": resultDB,
          "statusCode": 200
        });
      }
    )
  });

}


export async function deleteUsuarioByID(req, res) {
  //add verificação do ID
  openDB().then( db => { 
    db.get('DELETE FROM Usuario WHERE id=?',[req.body.id])
    .then( resultDB =>  
      res.json({
      "message": "Registro removido",
      "statusCode": 200
      })
    )
   }
  );

}

export async function getUsuarioByID(req, res) {
    //add verificação do ID
    openDB().then( async db => {
    await db.get('SELECT * FROM Usuario WHERE id=?',[req.body.id])
    .then( resultDB => {
     
      if(resultDB) { //resultDB?.id
        res.json({
          "usuario": resultDB,
          "statusCode": 200
        });
      } else {
        res.json({
          "usuario": "Registro não encontrado",
          "statusCode": 404
        });
      }
  
    });
   }
  );

}

export async function updateUsuario(req, res) {
  openDB().then( async db => {
    await db.run('UPDATE Usuario SET nome=?, nivel=? WHERE id=?', [req.body.nome, req.body.nivel, req.body.id])
    .then( async resultUpdate => {
      
      await db.get('SELECT * FROM Usuario WHERE id=?',[req.body.id])
       .then( async resultSelect => 
        res.json({
          "usuario": resultSelect,
          "statusCode": 200
        }))
      });
  }
  );
}


