import Student from "../model/studentModel";

export const createStudent = async (req,res)=>{
    const newdata = new Student({name:"Ramu",age:23});
    const savedata = await newdata.save();
    res.status(201).json(savedata);
}