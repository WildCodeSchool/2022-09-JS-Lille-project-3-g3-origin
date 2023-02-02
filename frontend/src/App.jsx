import "./reset.scss";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import PremiumPage from "./pages/PremiumPage/PremiumPage";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Profil from "./pages/Profil/Profil";
import Favoris from "./pages/Favoris/Favoris";
import PresentationPage from "./pages/PresentationPage/PresentationPage";
import Footer from "./components/Footer/Footer";

function App() {
  const { isAuthenticated, currentUser } = useContext(UserContext);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate replace to="/premium" />
              ) : (
                <PresentationPage />
              )
            }
          />
          <Route
            path="/premium"
            element={
              isAuthenticated ? <PremiumPage /> : <Navigate replace to="/" />
            }
          />
          <Route
            path="/home"
            element={
              currentUser.premium ? (
                <Home />
              ) : (
                <Navigate replace to="/premium" />
              )
            }
          />
          <Route
            path="/search"
            element={
              currentUser.premium ? (
                <Search />
              ) : (
                <Navigate replace to="/premium" />
              )
            }
          />
          <Route
            path="/profil"
            element={
              currentUser.premium ? (
                <Profil />
              ) : (
                <Navigate replace to="/premium" />
              )
            }
          />
          <Route
            path="/favoris"
            element={
              currentUser.premium ? (
                <Favoris />
              ) : (
                <Navigate replace to="/premium" />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
