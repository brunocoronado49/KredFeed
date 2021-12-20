import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/App.css";
import Nav from "./features/navigation/Nav";
import Home from "./features/home/components/Home";
import CreateProfile from "./features/createProfile/components/CreateProfile";

function App() {
  const title = "Proyecto React";

  return (
    <BrowserRouter>
      <Nav title={title} />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createProfile" element={<CreateProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
