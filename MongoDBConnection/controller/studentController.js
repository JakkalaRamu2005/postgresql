import Student from "../model/studentModel.js";

export const createStudent = async (req,res)=>{
    const newdata = new Student({name:"Ramu",age:23});
    const savedata = await newdata.save();
    res.status(201).json(savedata);
}

export const getAllStudents =async (req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({error:"Failed to retrieve students", details: err.message});
    }
}

export const getStudentByName = async(req,res)=>{
    try{
        const name = req.query.name;
        const student = await Student.find({name:name});
        if(student.length==0){
            return res.status(404).json({message: 'Student not found'});
        }
        res.status(200).json(student);
    }catch(err){
        res.status(500).json({error: 'Faield to retrieve student'});
    }
}