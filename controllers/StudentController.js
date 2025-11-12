import * as StudentModel from "../models/StudentModel.js";

export const fetchStudent = async (req, res) => {
    try{
        const student = await StudentModel.getStudent();
            res.status(200).json({success: true, message:student});

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudent = async (req, res) =>{
    const {srcode, name, course} = req.body;
    try{
        const insertId= await StudentModel.insertStudent(srcode, name, course);
        res.status(200).json({success : true, message: insertId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error" })
    }
}


export const editStudent = async (req, res) => {
    const {srcode, name, course} = req.body;
    const {studentId} = req.params

    try{
        const updatedId = await StudentModel.updateStudent(srcode, name, course, studentId);
        res.status(200).json({success: true, message: updatedId});

    }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
    
}

export const deleteStudent = async (req, res) => {
    const {studentId} = req.params;

    try{
        const deletedId = await StudentModel.deleteStudent(studentId);
        res.status(200).json({success: true, message: deletedId})
     }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
    
}