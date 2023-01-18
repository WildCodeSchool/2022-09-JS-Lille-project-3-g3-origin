import "./reset.scss";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PremiumPage from "@pages/PremiumPage/PremiumPage";
import { UserInfosContext } from "./contexts/UserContext";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Profil from "./pages/Profil/Profil";
import Favoris from "./pages/Favoris/Favoris";

function App() {
  return (
    
    <UserInfosContext>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PremiumPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/favoris" element={<Favoris />} />
          </Routes>
        </div>
      </Router>
    </UserInfosContext>
  );
}

export default App;
