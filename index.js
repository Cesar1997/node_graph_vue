const app = require("./app");
const db = require("./database/mysql");
db.connect((err) => {
    if(err) {
        console.log(`Ocurrio un error ${err}`);
    } else {
        app.listen(4000,() => {
          console.log("Conexion segura a la base de datos mysql");
        });
    }
})