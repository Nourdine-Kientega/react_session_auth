
// interface ReadCourseScreenProps {
//   title: string;
//   description: string;
// };

const ReadCourseScreen = () => {
  return (
    <div className="container">
          <div className="read-course-container">
      {/* Course Title */}
      <h1 className="course-title">Course Title Goes Here</h1>

      {/* Course Video Section */}
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

      {/* Course Description */}
      <div className="course-description">
        <h2>Course Description</h2>
        <p>
          Here is where you can add the detailed content of the course. 
          Explain what students will learn and other important details.
        </p>
      </div>
    </div>
    </div>
  )
}

export default ReadCourseScreen;