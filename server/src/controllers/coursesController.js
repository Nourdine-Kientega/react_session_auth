import Course from "../models/courseModel.js";

const getAllCourses = async (req, res) => {

    try {
        const courses = await Course.find();

        if (!courses || courses.length === 0) {
            return res.json({ message: 'No courses found.', courses: [] });
        }

        return res.status(200).json({
            message: 'Courses fetched successfully!',
            courses: courses,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
};


const getOneCourse = async (req, res) => {

    try {
        const { id } = req.params;
        const course = await Course.findOne({ _id: id });

        if (!course) {
            return res.json({ message: 'No course found with this ID.', course: {} });
        }

        return res.status(200).json({
            message: 'Course fetched successfully!',
            course,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
    
};

const addCourse = async (req, res) => {

    const { title, time, description } = req.body;

    try {
        if (!req.file) {
            return res.status(400).send({ message: 'No file uploaded 1.' });
        }
    
        const imagePath = '/uploads/' + req.file.filename;
        
        const newCourse = new Course({
            title,
            time,
            description,
            image: imagePath,
        });

        await newCourse.save();

        return res.status(201).json({ message: 'Course added successfully!' });
    
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Server error, please try again later.' });
    }
};


export { getAllCourses, getOneCourse, addCourse };