import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
