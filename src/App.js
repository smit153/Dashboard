import "./App.css";
import LeftCol from "./components/LeftCol/LeftCol";
import RightCol from "./components/RightCol/RightCol";
import MiddleCol from "./components/MiddleCol/MiddleCol";
function App() {
  return (
    <div className="App">
      <LeftCol />
      <MiddleCol />
      <RightCol />
    </div>
  );
}

export default App;
