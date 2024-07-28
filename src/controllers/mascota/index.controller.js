import { pool } from '../../database/connection.js'

export const getMascotas = async (req, res) => {
    try {
        return queryMascotas()
        .then((items) => {
            res.status(200).json(items)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json('Error del servidor')
    }
}

export const crearMascota = async (req, res) => {
    try {
        const { nombre, chip, carnet, raza, tamano, edad, foto } = req.body

        const sql = 'INSERT INTO `mascotas` (`nombre`, `chip`, `carnet`, `raza`, `tamano`, `edad`, `foto`) VALUES (?, ?, ?, ?, ?, ?, ?)'
        const timeout = 40000
        const values = [nombre, chip, carnet, raza, tamano, edad, foto]
        await pool.query({
            sql,
            timeout,
            values
        })
        
        return res.status(200).json({
            status: 'Mascota creada exitosamente',
            nombre,
            chip,
            carnet,
            raza,
            tamano,
            edad,
            foto
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error en el servidor'
        })
    }
}

export const actualizarMascota = async (req, res) => {
    try {
        const id = req.params.id
        const { nombre, chip, carnet, raza, tamano, edad, foto } = req.body
        const sql = 'UPDATE `mascotas` SET `chip` = ?, `carnet` = ?, `tamano` = ?, `edad` = ?, `foto` = ? WHERE `id` = ?'
        const timeout = 40000
        const values = [chip, carnet, tamano, edad, foto, id]

        await pool.query({
            sql,
            timeout,
            values
        })

        return res.status(200).json({
            status: 'Mascota actualizada exitosamente',
            nombre,
            chip,
            carnet,
            raza,
            tamano,
            edad,
            foto
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error en el servidor'
        })
    }
}

export const eliminarMascota = async (req, res) => {
    try {
        const id = req.params.id
        const sql = 'DELETE FROM `mascotas` WHERE `id` = ?'
        const timeout = 40000
        const values = [id]
        await pool.query({
            sql,
            timeout,
            values
        })
        res.status(200).json({
            status: `Mascota con id = ${id} ha sido eliminada exitosamente`
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error en el servidor'
        })
    }
}

function queryMascotas() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM mascotas', function(err, result) {
            if(err) reject(err)
            resolve(result)
        })
    })
}