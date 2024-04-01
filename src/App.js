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
import styled from "styled-components";
import DemographicTargetingSection from "./pages/DemographicTargetingSection";
import AdvertisingSection from "./pages/AdvertisingSection";
import AnalyticsSection from "./pages/AnalyticsSection";
import ComingSoonPart from "./pages/ComingSoonPart";
import Footer from "./pages/Footer";

import "./App.css";
import NavbarHook from "./pages/NavbarHook";
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


// function App() {
//     return (
//         // <Router>
//         //     <Routes>
//         //         <Route path="/" element={<LandingPage />} />
//         //         <Route path="/about" element={<AboutWithNavbar />} />
//         //         <Route path="/contact" element={<ContactWithNavbar />} />
//         //         <Route path="/Notes" element={<NotesAppWithNavbar />} />
//         //     </Routes>
//         // </Router>
//     );
// }

export default App;