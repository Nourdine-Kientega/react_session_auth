import { CoursesImages } from "../assets";
import CourseItemComponent from "../components/CourseItemComponent";



const courses = [
  {
    id: 1,
    image: CoursesImages.Git_Github,
    title: 'Git & GitHub Basics',
    time: '02h:15min',
    description: 'Learn the fundamentals of Git and GitHub for version control and collaboration. Perfect for beginners starting in the world of software development.'
  },
  {
    id: 2,
    image: CoursesImages.JavaScript,
    title: 'JavaScript Essentials',
    time: '04h:00min',
    description: 'Master JavaScript, the backbone of modern web development. From variables to advanced concepts like closures and promises, this course covers it all.'
  },
  {
    id: 3,
    image: CoursesImages.MongoDB,
    title: 'Introduction to MongoDB',
    time: '03h:30min',
    description: 'Get hands-on with MongoDB, the NoSQL database. This course will take you through setting up MongoDB, working with collections, and performing CRUD operations.'
  },
  {
    id: 4,
    image: CoursesImages.Mongoose,
    title: 'Mastering Mongoose',
    time: '02h:45min',
    description: 'Dive deeper into Mongoose for Node.js. Learn how to model MongoDB data effectively, validate data, and implement efficient query strategies.'
  },
  {
    id: 5,
    image: CoursesImages.Nodejs,
    title: 'Node.js Crash Course',
    time: '05h:20min',
    description: 'Explore the power of Node.js for building scalable and fast server-side applications. Learn to set up servers, work with APIs, and more!'
  },
  {
    id: 6,
    image: CoursesImages.RestAPI,
    title: 'Building RESTful APIs with Node.js',
    time: '03h:10min',
    description: 'Learn how to create RESTful APIs using Node.js and Express. Understand how to handle requests, set up routes, and interact with databases.'
  },
  {
    id: 7,
    image: CoursesImages.SafeNodejs,
    title: 'Secure Node.js Development',
    time: '04h:30min',
    description: 'Protect your Node.js applications from common security vulnerabilities. Learn about authentication, authorization, data validation, and other best practices.'
  },
  {
    id: 8,
    image: CoursesImages.YoutubeClone,
    title: 'Building a YouTube Clone',
    time: '06h:00min',
    description: 'Build a fully functional YouTube clone from scratch. This course will take you through building the front-end and back-end of a video streaming platform.'
  }
];


const HomeScreen = () => {




  return (
    <div className="container">
      <div className="course-container">
        {courses.map((course) => (
          <CourseItemComponent key={course.id} image={course.image} title={course.title} time={course.time} />
        ))}
      </div>
    </div>
  )
}

export default HomeScreen;