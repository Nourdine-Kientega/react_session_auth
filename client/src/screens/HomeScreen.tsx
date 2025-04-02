import { useEffect, useState } from "react";
import CourseItemComponent from "../components/CourseItemComponent";

interface Course {
  _id: string;
  title: string;
  time: string;
  image: string;
  description: string;
};

const HomeScreen = () => {

  const [courses, setCourses] = useState<Course[]>();

  const handleFecthCourse = async () => {

    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data.courses);
    } catch (error) {
      console.error('Failed to fecth courses');
    }
  };

  useEffect(() => {
    handleFecthCourse();
  }, []);

  return (
    <div className="container">
      <div className="course-container">
        {courses?.map((course) => (
          <CourseItemComponent key={course._id} id={course._id} image={course.image} title={course.title} time={course.time} />
        ))}
      </div>
    </div>
  )
}

export default HomeScreen;