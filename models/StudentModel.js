import pool from './db.js';

export const getStudent = async() =>{
    const[rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
}
