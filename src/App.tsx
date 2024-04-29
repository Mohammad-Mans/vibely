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
import HomeLayout from "./components/layout/HomeLayout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="marketplace" element={<MarketplacePage />} />
            <Route path="groups" element={<GroupsPage />} />
            <Route path="gaming" element={<GamingPage />} />
          </Route>
        </Route>

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </div>
  );
}

export default App;
