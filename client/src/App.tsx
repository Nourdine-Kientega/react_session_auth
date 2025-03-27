import LayoutComponent from "./partials/LayoutComponent";
import HomeScreen from "./screens/HomeScreen";
import '../src/assets/styles/default.css';

const App = () => {

  return (
    <LayoutComponent>
      <HomeScreen />
    </LayoutComponent>
  )
}

export default App;