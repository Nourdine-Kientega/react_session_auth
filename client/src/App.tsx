import LayoutComponent from "./partials/LayoutComponent";
import HomeScreen from "./screens/HomeScreen";
import '../src/assets/styles/default.css';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReadCourseScreen from "./screens/ReadCourseScreen";
import AddCourseScreen from "./screens/AddCourseScreen";
// import courseScreen from "./screens/ReadCourseScreen";

const App = () => {

  return (
    <LayoutComponent>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/read_course/:id" element={<ReadCourseScreen />} />
          <Route path="/add_course" element={<AddCourseScreen />} />
        </Routes>
      </Router>
    </LayoutComponent>
  )
}

export default App;