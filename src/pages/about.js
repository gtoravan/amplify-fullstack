// Filename - pages/about.js

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
];

const About = () =>  {
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
                                Demographic HyperTargeting
                            </HeroTitle>
                            <HeroDescription>
                                Effortlessly generate hyper-demographic-specific advertisements from base images and prompts. Our platform leverages the latest in Generative AI to help you create highly targeted campaigns that resonate with your audience. With zero overhead or production costs, you can focus on what matters most—connecting with your customers.
                            </HeroDescription>
                            <Features>
                                {demographicData.map((item, index) => (
                                    <Feature key={index}>
                                        <FeatureIcon src={item.icon} alt={item.title} />
                                        <FeatureTitle>{item.title}</FeatureTitle>
                                        <FeatureDescription>{item.description}</FeatureDescription>
                                    </Feature>
                                ))}
                            </Features>
                        </HeroSection>
                    </Header>
                </MainColumn>
                <ImageColumn>
                    <HeroImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/b49823baa0fd3b748a117548e1766f580bc47a61e4a50dd6cdfa566cab133a44?apiKey=9354181eac784a43b2d64ee4bd7f05b0&" alt="Product" />
                </ImageColumn>
            </ContentWrapper>
        </MainContainer>
    );
}



const demographicData = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93023db15446316cdf1a60289cb5590461c3449f4a293265cdddf219a14d162c?apiKey=9354181eac784a43b2d64ee4bd7f05b0&",
        title: "Targeted Text",
        description: "Crafted with your audience in mind, the text shown is tailored to resonate with their preferences, significantly increasing the likelihood of them making a purchase."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93023db15446316cdf1a60289cb5590461c3449f4a293265cdddf219a14d162c?apiKey=9354181eac784a43b2d64ee4bd7f05b0&",
        title: "Customized Images",
        description: "Provide simple product pictures, and our platform will transform them into targeted advertisements that cater to the preferences and likings of your chosen demographic."
    }
];

const Container = styled.section`
  margin-top: 163px;
  width: 100%;
  max-width: 1276px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

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
margin-top: 138px;
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


const Content = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-left: 0;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Heading = styled.h2`
  color: #090fff;
  font: 500 36px/133% Roboto, sans-serif;
`;

const Description = styled.p`
  color: #7a7cd6;
  margin-top: 26px;
  font: 400 16px/26px Roboto, sans-serif;
`;

const Features = styled.div`
  margin-top: 39px;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Feature = styled.div`
  flex: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FeatureIcon = styled.img`
  width: 36px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const FeatureTitle = styled.h3`
  color: #060098;
  margin-top: 20px;
  font: 500 16px/162.5% Roboto, sans-serif;
`;

const FeatureDescription = styled.p`
  color: #7a7cd6;
  margin-top: 15px;
  font: 400 12px/18px Roboto, sans-serif;
`;

const RightColumn = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
    margin-left: 0;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1.14;
  object-fit: contain;
`;

export default About;
