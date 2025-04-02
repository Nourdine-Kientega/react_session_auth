
// interface ReadCourseScreenProps {
//   title: string;
//   description: string;
// };

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Course {
  _id: string;
  title: string;
  time: string;
  image: string;
  description: string;
};

const ReadCourseScreen = () => {

  const { id } = useParams();
  const [course, setCourse] = useState<Course>();

  const handleFecthCourse = async () => {

    try {
      const response = await fetch(`/api/get_course/${id}`);
      const data = await response.json();
      setCourse(data.course);
    } catch (error) {
      console.error('Failed to fecth courses');
    }
  };

  useEffect(() => {
    handleFecthCourse();
    console.log('hi');

  }, [])

  return (
    <div className="container">
      <div className="read-course-container">
        {/* Course Title */}
        <h1 className="course-title">{course ? course?.title : 'Course Title Goes Here'}</h1>

        <div className="course-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/mKT4o4y9xmI"
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="course-description">
          <h2>Course Description</h2>
          <p>
            {course ? (
              course?.description
            ) : (
              <span>Here is where you can add the detailed content of the course. Explain what students will learn and other important details.</span>
            )
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReadCourseScreen;