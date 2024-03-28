import * as React from "react";
import styled from "styled-components";

const footerLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
];

const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/015d9621e4fc9af33d6b4fdb6fd35893efaf6dac169876a50bb59074f541f118?apiKey=9354181eac784a43b2d64ee4bd7f05b0&", alt: "Social Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e93266308d48d5a38f442085611def86084cb4892bec5b90b0d673a2ff18c3e3?apiKey=9354181eac784a43b2d64ee4bd7f05b0&", alt: "Social Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfb4727c50015bc7d65d6164efffaebc8c1ea0a643650f9d5cbb781e48a0feda?apiKey=9354181eac784a43b2d64ee4bd7f05b0&", alt: "Social Icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0499d317c1e9a9ade6cdc9097fa6664de7fcccb39cedde13aab98bc9d2ff9a6a?apiKey=9354181eac784a43b2d64ee4bd7f05b0&", alt: "Social Icon 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c306d6084a12b7aac600939ff4b92529772033f94bd2de331a31cbc5d21b1492?apiKey=9354181eac784a43b2d64ee4bd7f05b0&", alt: "Social Icon 5" },
];

function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterTop>
                    <FooterInfo>
                        <Copyright>©2023 DisruptAI, Inc.</Copyright>
                        <FooterLinks>
                            {footerLinks.map((link) => (
                                <FooterLink key={link.label} href={link.url}>
                                    {link.label}
                                </FooterLink>
                            ))}
                        </FooterLinks>
                    </FooterInfo>
                    <JoinWaitlistButton>Join Waitlist</JoinWaitlistButton>
                </FooterTop>
                <Divider />
                <SocialIcons>
                    {socialIcons.map((icon, index) => (
                        <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                    ))}
                </SocialIcons>
            </FooterContent>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  background-color: #e7ecff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 57px 60px 34px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1112px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FooterTop = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.p`
  color: #7a7cd6;
  font: 500 14px/171% Roboto, sans-serif;
`;

const FooterLinks = styled.nav`
  display: flex;
  margin-top: 37px;
  gap: 20px;
  color: #8a8cdb;
  font-weight: 400;
  white-space: nowrap;
  justify-content: space-between;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  font: 400 14px/171% Roboto, sans-serif;
`;

const JoinWaitlistButton = styled.button`
  border-radius: 2px;
  background-color: #ff00f7;
  align-self: start;
  margin-top: 5px;
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 8px 22px;
  font: 500 12px/150% Roboto, sans-serif;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Divider = styled.hr`
  background-color: #7a7cd6;
  margin-top: 12px;
  height: 1px;
  border: none;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  align-self: end;
  display: flex;
  margin-top: 22px;
  gap: 20px;
  justify-content: space-between;
`;

const SocialIcon = styled.img`
  width: 16px;
  height: auto;
`;

export default Footer;