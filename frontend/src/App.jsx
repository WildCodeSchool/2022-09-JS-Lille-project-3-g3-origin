import "./reset.scss";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserInfosContext } from "./contexts/UserContext";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Profil from "./pages/Profil/Profil";
import Favoris from "./pages/Favoris/Favoris";
import PresentationPage from "./pages/PresentationPage/PresentationPage";

function App() {
  return (
    <UserInfosContext>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PresentationPage />} />
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
