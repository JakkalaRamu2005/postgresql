import express from 'express'
import {createStudent, getAllStudents, getStudentByName} from '../controller/studentController.js'

const route = express.Router();


route.post('/create', createStudent);
route.get('/students', getAllStudents);
route.get('getAllName', getStudentByName);

export default route 