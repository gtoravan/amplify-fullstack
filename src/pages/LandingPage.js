import DemographicTargetingSection from "./DemographicTargetingSection";
import AdvertisingSection from "./AdvertisingSection";
import AnalyticsSection from "./AnalyticsSection";
import ComingSoonPart from "./ComingSoonPart";
import Footer from "./Footer";
import * as React from "react";
// import About from "./about";
// import Navbar from "./Navbar";
// import Contact from "./contact";
// import NotesApp from "../Notes";
import styled from "styled-components";
import disruptaiImage from './disruptainew.png';

const data = [
    {
        imageUrl: {disruptaiImage},
        title: "AI-Powered Advertising: Target Perfectly, Spend Wisely",
        description:
            "Introducing the next big thing in Marketing and Advertising: a\n" +
            "                                Generative AI-powered Demand-side Platform. This innovative\n" +
            "                                platform empowers Ad Campaign Managers to target the best\n" +
            "                                demographics and promote products with zero overhead or\n" +
            "                                production costs.",
    },
];


function AnalyticsItem({ imageUrl, title, description }) {
    return (
        <ItemWrapper>
            <ContentColumn>
                <ContentWrapper>
                    <HeroTitle>{title}</HeroTitle>
                    <HeroDescription>{description}</HeroDescription>
                </ContentWrapper>
            </ContentColumn>
            <ImageColumn>
                <Image src={disruptaiImage} alt="Analytics" loading="lazy" />
            </ImageColumn>
        </ItemWrapper>
    );
}




function LandingPage() {
    return (
        <MainContainer>


            {/*<ContentWrapper>*/}
            {/*    <MainColumn>*/}
            {/*        <Header>*/}
            {/*            /!*<Nav>*!/*/}
            {/*            /!*    {navItems.map((item) => (*!/*/}
            {/*            /!*        <Link key={item.label} to={item.url}>*!/*/}
            {/*            /!*            {item.label}*!/*/}
            {/*            /!*        </Link>*!/*/}
            {/*            /!*    ))}*!/*/}
            {/*            /!*</Nav>*!/*/}
            {/*            <HeroSection>*/}
            {/*                <HeroTitle>*/}
            {/*                    AI-Powered Advertising: Target Perfectly, Spend Wisely*/}
            {/*                </HeroTitle>*/}
            {/*                <HeroDescription>*/}
            {/*                    Introducing the next big thing in Marketing and Advertising: a*/}
            {/*                    Generative AI-powered Demand-side Platform. This innovative*/}
            {/*                    platform empowers Ad Campaign Managers to target the best*/}
            {/*                    demographics and promote products with zero overhead or*/}
            {/*                    production costs.*/}
            {/*                </HeroDescription>*/}
            {/*                <HeroActions>*/}
            {/*                    <PrimaryButton>Sign Up!</PrimaryButton>*/}
            {/*                    <SecondaryButton>Learn More</SecondaryButton>*/}
            {/*                </HeroActions>*/}
            {/*            </HeroSection>*/}
            {/*        </Header>*/}
            {/*    </MainColumn>*/}
            {/*    <ImageColumn>*/}
            {/*        /!*https://cdn.builder.io/api/v1/image/assets/TEMP/fbf32a592f14c9f3aff0726d729338eda00e904e8b7041411d8e37364c135d3b?apiKey=9354181eac784a43b2d64ee4bd7f05b0&*!/*/}
            {/*        <HeroImage src={disruptaiImage} alt="AI-powered advertising" />*/}
            {/*    </ImageColumn>*/}
            {/*</ContentWrapper>*/}

            <SectionWrapper>
                {data.map((item, index) => (
                    <AnalyticsItem key={index} {...item} />
                ))}
            </SectionWrapper>


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





const MainContainer = styled.main`
  @media (max-width: 991px) {
    max-width: 100%;
  }
  background-color: white !important; // Add !important to override other styles
`;

// const ContentWrapper = styled.div`
//                        display: flex;
// gap: 20px;
//
// @media (max-width: 991px) {
//     flex-direction: column;
//     gap: 0;
// }
// `;

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

// const Nav = styled.nav`
//             display: flex;
// max-width: 244px;
//   margin-left: 30px;
// gap: 20px;
// font-size: 14px;
// color: #4a4ec9;
// font-weight: 400;
// line-height: 1.71;
// justify-content: space-between;
//
// @media (max-width: 991px) {
//     white-space: initial;
// }
// `;

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

// const ImageColumn = styled.div`
//                     flex: 0 0 59%;
// margin-left: 20px;
//
// @media (max-width: 991px) {
//     flex: 1;
//     margin-left: 0;
// }
// `;

// const HeroImage = styled.img`
//                   aspect-ratio: 1.01;
// object-fit: auto;
// object-position: center;
// width: 100%;
// fill: #e7e6ff;
//
// @media (max-width: 991px) {
//     max-width: 100%;
// }
// `;



const SectionWrapper = styled.section`
  max-width: 1195px;
  margin: 136px auto 0;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  width: 50%;
  margin-left: 100px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentColumn = styled.div`
  width: 41%;
  margin-left: 20px;
  margin-top: 80px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.h2`
  color: #090fff;
  font: 500 36px/48px Roboto, sans-serif;
  font-feature-settings: "clig" off, "liga" off;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  color: #7a7cd6;
  font: 400 16px/26px Roboto, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 22px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


export default LandingPage;