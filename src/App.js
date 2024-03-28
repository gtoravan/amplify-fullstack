import * as React from "react";
import Navbar from "./ui-components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route, Link,
} from "react-router-dom";
// import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotesApp from "./Notes";
import styled from "styled-components";
import DemographicTargetingSection from "./pages/DemographicTargetingSection";
import AdvertisingSection from "./pages/AdvertisingSection";
import AnalyticsSection from "./pages/AnalyticsSection";
import ComingSoonPart from "./pages/ComingSoonPart";
import Footer from "./pages/Footer";

const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Notes", url: "/Notes" },
];

function LandingPage() {
    return (
        <MainContainer>
            <ContentWrapper>
                <MainColumn>
                    <Header>
                        <Nav>
                            {navItems.map((item) => (
                                <Link key={item.label} to={item.url}>
                                    {item.label}
                                </Link>
                            ))}
                        </Nav>
                        <HeroSection>
                            <HeroTitle>
                                AI-Powered Advertising: Target Perfectly, Spend Wisely
                            </HeroTitle>
                            <HeroDescription>
                                Introducing the next big thing in Marketing and Advertising: a
                                Generative AI-powered Demand-side Platform. This innovative
                                platform empowers Ad Campaign Managers to target the best
                                demographics and promote products with zero overhead or
                                production costs.
                            </HeroDescription>
                            <HeroActions>
                                <PrimaryButton>Sign Up!</PrimaryButton>
                                <SecondaryButton>Learn More</SecondaryButton>
                            </HeroActions>
                        </HeroSection>
                    </Header>
                </MainColumn>
                <ImageColumn>
                    <HeroImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbf32a592f14c9f3aff0726d729338eda00e904e8b7041411d8e37364c135d3b?apiKey=9354181eac784a43b2d64ee4bd7f05b0&" alt="AI-powered advertising" />
                </ImageColumn>
            </ContentWrapper>
            <>
                < DemographicTargetingSection />
            </>
            <>
                < AdvertisingSection />
            </>
            <>
                < AnalyticsSection />
            </>
            <>
                < ComingSoonPart />
            </>
            <>
                < Footer />
            </>
        </MainContainer>

    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutWithNavbar />} />
                <Route path="/contact" element={<ContactWithNavbar />} />
                <Route path="/Notes" element={<NotesAppWithNavbar />} />
            </Routes>
        </Router>
    );
}

function AboutWithNavbar() {
    return (
        <>
            <About />
        </>
    );
}

function ContactWithNavbar() {
    return (
        <>
            <Navbar />
            <Contact />
        </>
    );
}

function NotesAppWithNavbar() {
    return (
        <>
            <Navbar />
            <NotesApp />
        </>
    );
}


const MainContainer = styled.main`
@media (max-width: 991px) {
    max-width: 100%;
}
`;

const ContentWrapper = styled.div`
                       display: flex;
gap: 20px;

@media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
}
`;

const MainColumn = styled.div`
                   flex: 0 0 41%;
margin-left: 0;

@media (max-width: 991px) {
    flex: 1;
}
`;

const Header = styled.header`
               display: flex;
flex-direction: column;
margin-top: 25px;

@media (max-width: 991px) {
    max-width: 100%;
}
`;

const Nav = styled.nav`
            display: flex;
max-width: 244px;
  margin-left: 30px;
gap: 20px;
font-size: 14px;
color: #4a4ec9;
font-weight: 400;
line-height: 1.71;
justify-content: space-between;

@media (max-width: 991px) {
    white-space: initial;
}
`;

const NavItem = styled.a`
                font-family: Roboto, sans-serif;
`;

const HeroSection = styled.section`
                    display: flex;
flex-direction: column;
margin-top: 50px;
padding-left: 48px;
font-weight: 500;

@media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    margin-top: 40px;
}
`;

const HeroTitle = styled.h1`
                  color: #090fff;
font-feature-settings: "clig" off, "liga" off;
letter-spacing: 1px;
align-self: center;
font: 50px/66px Roboto, sans-serif;

@media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 59px;
}
`;

const HeroDescription = styled.p`
                        color: #4a4ec9;
font-feature-settings: "clig" off, "liga" off;
margin-top: 26px;
font: 400 18px/30px Roboto, sans-serif;

@media (max-width: 991px) {
    max-width: 100%;
}
`;

const HeroActions = styled.div`
                    display: flex;
margin-top: 24px;
gap: 20px;
font-size: 16px;
text-align: center;
line-height: 1.625;

@media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
}
`;

const PrimaryButton = styled.button`
                      font-feature-settings: "clig" off, "liga" off;
font-family: Roboto, sans-serif;
border-radius: 2px;
background-color: #ff00f8;
color: #fff;
flex-grow: 1;
width: fit-content;
padding: 12px 60px;

@media (max-width: 991px) {
    padding: 0 20px;
}
`;

const SecondaryButton = styled.button`
                        font-feature-settings: "clig" off, "liga" off;
font-family: Roboto, sans-serif;
border-radius: 2px;
border: 2px solid #ff00f8;
color: #ff00f8;
flex-grow: 1;
width: fit-content;
padding: 14px 55px;

@media (max-width: 991px) {
    padding: 0 20px;
}
`;

const ImageColumn = styled.div`
                    flex: 0 0 59%;
margin-left: 20px;

@media (max-width: 991px) {
    flex: 1;
    margin-left: 0;
}
`;

const HeroImage = styled.img`
                  aspect-ratio: 1.01;
object-fit: auto;
object-position: center;
width: 100%;
fill: #e7e6ff;

@media (max-width: 991px) {
    max-width: 100%;
}
`;

export default App;