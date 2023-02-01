import { Route, Routes } from "react-router-dom";
import Home from "./home"
import Register from "./pages/createUser";
import Login from "./pages/login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
