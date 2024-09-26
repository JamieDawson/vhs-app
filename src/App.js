import logo from "./logo.svg";
import sf from "./Images/sf.jpeg";
import "./App.css";
import VhsImage from "./Components/VhsImage/VhsImage.component";

function App() {
  return (
    <div className="App">
      <VhsImage src={sf} alt="image being shown" />
    </div>
  );
}

export default App;
