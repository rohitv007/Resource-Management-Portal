import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resources from "./pages/Resources";
import AddResource from "./pages/AddResource";
import NotFound from "./pages/NotFound";

function App() {
  // GET endpoint - `${VITE_APP_API_URL}/resources.json`
  // POST endpoint - `${VITE_APP_API_URL}/add_resource.json`

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Resources />}></Route>
          <Route path="/add-resource" element={<AddResource />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
