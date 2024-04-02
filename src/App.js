import * as React from "react";
// import Navbar from "./ui-components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route, Link,
} from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotesApp from "./Notes";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./pages/Navbar";


const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Notes", url: "/Notes" },
];

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                {/*<NavbarHook />*/}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/notes" element={<NotesApp />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;