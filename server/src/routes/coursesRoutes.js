import express from 'express';
import { addCourse, getAllCourses } from '../controllers/coursesController';

const courseRouter = express.Router();

courseRouter.post('/add_course', addCourse);

courseRouter.get('/courses', getAllCourses);