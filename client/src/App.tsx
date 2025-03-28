import LayoutComponent from "./partials/LayoutComponent";
import HomeScreen from "./screens/HomeScreen";
import '../src/assets/styles/default.css';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const App = () => {

  return (
    <LayoutComponent>
      <HomeScreen />
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
    </LayoutComponent>
  )
}

export default App;