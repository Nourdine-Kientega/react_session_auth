import express from 'express';
import { addCourse, getAllCourses, getOneCourse } from '../controllers/coursesController.js';
import uploadFile from '../utils/uploadFile.js';

const courseRouter = express.Router();

courseRouter.post('/add_course', uploadFile('image'), addCourse);

courseRouter.get('/get_course/:id', getOneCourse);

courseRouter.get('/courses', getAllCourses);

export default courseRouter;