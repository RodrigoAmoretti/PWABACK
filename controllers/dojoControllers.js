import {pool} from '../database/config.js'


export const getAlumnos = async (req, res) =>{

    try {
        const [result] = await pool.query(
            "SELECT * FROM alumnos ORDER BY createAt ASC"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
    


export const getAlumno = async (req, res) =>{

    try {
        const [result] = await pool.query("SELECT * FROM alumnos WHERE id = ?", [
            req.params.id,
        ]);
        res.json(result[0]);
    }catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



export const createAlumno = async (req, res) => {
    
    try {
        const { nombre, email, telefono, disciplina } = req.body;
        const [result] = await pool.query(
            "INSERT INTO alumnos(nombre, email, telefono, disciplina) VALUES (?, ?, ?, ?)",
            [nombre, email, telefono, disciplina]
        );
        res.json({
            id: result.insertId,
            nombre,
            email,
            telefono,
            disciplina,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateAlumno = async (req, res) => {
    
    try {
        const result = await pool.query("UPDATE alumnos SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
            return res.status(500).json({ message: error.message });
    }
};
    

export const deleteAlumno = async (req, res) => {

    try {
        const [result] = await pool.query("DELETE FROM alumnos WHERE id = ?", [
        req.params.id
        ]);

        if (result.affectedRows === 0)
        return res.status(404).json({ message: "Alumno no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};