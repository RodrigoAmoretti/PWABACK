import { Router } from 'express';
import {
    getAlumnos,
    getAlumno,
    createAlumno,
    updateAlumno,
    deleteAlumno
} from '../controllers/dojoControllers.js'

const router = Router();




//Obtiene todos los Alumnos
router.get("/alumnos", getAlumnos);

//Obtiene un solo Alumno
router.get("/alumno/:id", getAlumno);

// Crea un Alumno
router.post("/alumnos", createAlumno);

//Actualiza el Alumno
router.put("/alumno/:id", updateAlumno);

// Elimina el Alumno
router.delete("/alumnos/:id", deleteAlumno);

export default router;