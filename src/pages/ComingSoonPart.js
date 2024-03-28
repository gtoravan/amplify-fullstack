import React from "react";
import styled from "styled-components";

const ComingSoonSection = styled.section`
  margin-top: 152px;
  width: 100%;
  max-width: 1203px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ComingSoonContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FeatureImage = styled.img`
  aspect-ratio: 1.03;
  object-fit: cover;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-weight: 500;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ComingSoonTitle = styled.h2`
  color: #090fff;
  font-feature-settings: "clig" off, "liga" off;
  font: 36px/133% Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ComingSoonDescription = styled.p`
  color: #7a7cd6;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 26px;
  font: 400 16px/26px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const WaitlistButton = styled.button`
  font-feature-settings: "clig" off, "liga" off;
  border-radius: 2px;
  background-color: #ff00f7;
  align-self: start;
  margin-top: 30px;
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 8px 18px;
  font: 14px/171% Roboto, sans-serif;
  border: none;
  cursor: pointer;
`;

function ComingSoonPart() {
    return (
        <ComingSoonSection>
            <ComingSoonContent>
                <ImageColumn>
                    <FeatureImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8a84f0cabe862ca2bda8869ec45dd8715ec06374826f4a2c4a29fa91d0b4007?apiKey=9354181eac784a43b2d64ee4bd7f05b0&" alt="Coming Soon Feature" loading="lazy" />
                </ImageColumn>
                <TextColumn>
                    <TextContent>
                        <ComingSoonTitle>Coming Soon!</ComingSoonTitle>
                        <ComingSoonDescription>
                            Step into the future of Marketing and Advertising with Text-to-Video Generation. Tailor-made videos designed for your customer demographic, poised to skyrocket your sales. Stay tuned for the upcoming launch of this groundbreaking feature.
                        </ComingSoonDescription>
                        <WaitlistButton>Signup for Waitlist</WaitlistButton>
                    </TextContent>
                </TextColumn>
            </ComingSoonContent>
        </ComingSoonSection>
    );
}

export default ComingSoonPart;