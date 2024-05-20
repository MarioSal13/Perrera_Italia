
//importar la conexion a la base de datos
import db from "../database/db.js";

//importamos el sequelize
import { DataTypes } from "sequelize";

    const UsuarioModel = db.define('usuario', {
        Nombre_Usuario: {type: DataTypes.STRING},
        Contrasena : {type: DataTypes.STRING},
        Rol: {type: DataTypes.STRING},
        Id_Perrera: {type: DataTypes.INTEGER},
    })

export default UsuarioModel