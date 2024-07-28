import { Router } from 'express'
import {getMascotas, crearMascota, actualizarMascota, eliminarMascota} from '../controllers/mascota/index.controller.js'

const router = Router()

router.get('/getMascotas', getMascotas)
router.post('/crearMascota', crearMascota)
router.put('/actualizarMascota/:id', actualizarMascota)
router.delete('/eliminarMascota/:id', eliminarMascota)

export default router