import UsuarioModel from "../models/BlogModel.js";

//** Metodos del CRUD */

//mostrar todos los registros
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({message:error.message})
    }
}

//mostrar registro
export const getUsuario =  async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(usuario[0])
    } catch (error) {
        res.json({message:error.message})
    }
}
//crear un registro
export const CreatUsua = async (req, res) => {
    try {
        await UsuarioModel.create(req,res)
        res.json({
            "Message":"Registro Creado Correctamente!!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

//actualizar un registro
export const UpdateUsua = async (req, res) => {
    try {
        await UsuarioModel.update(req.body, {
            where: {id: req.parmas.id}
        })
        res.json({
            "Message":"Registro Actualizado Correctamente!!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

//Eliminar un registro
export const EliminateUsua = async (req, res) => {
    try {
        await UsuarioModel.destroy(req.body, {
            where: {id: req.parmas.id}
        })
        res.json({
            "Message":"el registro se elimino Correctamente!!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}