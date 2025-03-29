import LayoutComponent from "./partials/LayoutComponent";
import HomeScreen from "./screens/HomeScreen";
import '../src/assets/styles/default.css';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <LayoutComponent>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </Router>
    </LayoutComponent>
  )
}

{/* <HomeScreen /> */ }
{/* <LoginScreen /> */ }
{/* <SignupScreen /> */ }

export default App;