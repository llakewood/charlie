import './App.css';
import { Chrono } from "react-chrono";
import { moments } from "./life";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Chrono
        items={moments}
        mode="VERTICAL_ALTERNATING"
        theme={{primary: "#BAC325", secondary: "#2D2723", cardForeColor: "#2D2723" }}
        />
    </div>
  )
}

export default App;
