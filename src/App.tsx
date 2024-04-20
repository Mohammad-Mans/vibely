import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  MissingPage,
  WatchPage,
  MarketplacePage,
  GroupsPage,
  GamingPage,
} from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route>
          <Route index element={<HomePage />} />
          <Route path="watch" element={<WatchPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="gaming" element={<GamingPage />} />
        </Route>

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </div>
  );
}

export default App;
