import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Details from "./pages/Details/Details";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import MoreItem from "./pages/MoreItem/MoreItem";
import ContactPage from "./pages/Contect/Contect";
import FavoriteRecipes from "./components/favoriteRecipes/FavoriteRecipes";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrollTop/ScrollToTop";
import LoginForm from "./pages/registration/LoginForm";
import SignUpForm from "./pages/registration/SignUpForm";
import { auth } from "./pages/registration/FirebaseConfig";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  // Effect to check authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user?.displayName); // Set username if user is logged in
      } else {
        setUsername("");
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [username]);

  // Show loading state while waiting for Firebase check
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="h-screen z-50 relative custom-scrollbar bg-[#E4D2BC]">
        <Toaster position="top-left" reverseOrder={false} />{" "}
        <BrowserRouter>
          <ScrollToTop /> {/* Scroll to top on route change */}
          {username ? (
            <>
              <NavBar username={username} />
              {/* Toast notifications */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/more-items/:name" element={<MoreItem />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <FavoriteRecipes /> {/* Display FavoriteRecipes component */}
              <Footer />
            </>
          ) : (
            // Show Login or SignUp when user is not logged in
            <>
              <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route
                  path="/signUp"
                  element={<SignUpForm setUsername={setUsername} />}
                />
                <Route
                  path="*"
                  element={<SignUpForm setUsername={setUsername} />}
                />{" "}
                {/* Redirect to SignUp */}
              </Routes>
            </>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
