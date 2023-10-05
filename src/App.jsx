// App.jsx
import "./App.css";
import HomePage from "./pages/homepage";
import ImmaturePage from "./pages/ImmaturePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VegPage from "./pages/VegPage";
import FlowerPage from "./pages/FlowerPage";
import WastePage from "./pages/WastePage";
import HarvestPage from "./pages/HarvestPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/immature" element={<ImmaturePage />} />
          <Route path="/veg" element={<VegPage />} />
          <Route path="/flower" element={<FlowerPage />} />
          <Route path="/waste" element={<WastePage />} />
          <Route path="/harvest" element={<HarvestPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
