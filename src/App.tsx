import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, MissingPage } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </div>
  );
}

export default App;
