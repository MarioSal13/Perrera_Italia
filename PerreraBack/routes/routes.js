import express from 'express'
import { CreatUsua, EliminateUsua, UpdateUsua, getAllUsuarios, getUsuario } from '../controllers/BlogControler.js'

const router = express.Router()

router.get('/',getAllUsuarios)
router.get('/:id',getUsuario)
router.post('/',CreatUsua)
router.put('/:id',UpdateUsua)
router.delete('/:id',EliminateUsua)

export default router