import * as React from "react";
import styled from "styled-components";

const DemographicTargetingSection = () => {
    const targetingFeatures = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93023db15446316cdf1a60289cb5590461c3449f4a293265cdddf219a14d162c?apiKey=9354181eac784a43b2d64ee4bd7f05b0&",
            title: "Targeted Text",
            description:
                "Crafted with your audience in mind, the text shown is tailored to resonate with their preferences, significantly increasing the likelihood of them making a purchase.",
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93023db15446316cdf1a60289cb5590461c3449f4a293265cdddf219a14d162c?apiKey=9354181eac784a43b2d64ee4bd7f05b0&",
            title: "Customized Images",
            description:
                "Provide simple product pictures, and our platform will transform them into targeted advertisements that cater to the preferences and likings of your chosen demographic.",
        },
    ];

    return (
        <SectionWrapper>
            <ContentWrapper>
                <ContentColumn>
                    <ContentContainer>
                        <SectionTitle>Demographic HyperTargeting</SectionTitle>
                        <SectionDescription>
                            Effortlessly generate hyper-demographic-specific advertisements
                            from base images and prompts. Our platform leverages the latest in
                            Generative AI to help you create highly targeted campaigns that
                            resonate with your audience. With zero overhead or production
                            costs, you can focus on what matters most—connecting with your
                            customers.
                        </SectionDescription>
                        <FeaturesContainer>
                            {targetingFeatures.map((feature, index) => (
                                <FeatureColumn key={index}>
                                    <FeatureWrapper>
                                        <FeatureIcon
                                            src={feature.icon}
                                            alt={`Icon for ${feature.title}`}
                                        />
                                        <FeatureTitle>{feature.title}</FeatureTitle>
                                        <FeatureDescription>{feature.description}</FeatureDescription>
                                    </FeatureWrapper>
                                </FeatureColumn>
                            ))}
                        </FeaturesContainer>
                    </ContentContainer>
                </ContentColumn>
                <ImageColumn>
                    <FeatureImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/b49823baa0fd3b748a117548e1766f580bc47a61e4a50dd6cdfa566cab133a44?apiKey=9354181eac784a43b2d64ee4bd7f05b0&" alt="Demographic targeting feature" />
                </ImageColumn>
            </ContentWrapper>
        </SectionWrapper>
    );
};

const SectionWrapper = styled.section`
  margin: 163px auto 0;
  max-width: 1276px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ContentColumn = styled.div`
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h2`
  color: #090fff;
  font: 500 36px/133% Roboto, sans-serif;
`;

const SectionDescription = styled.p`
  color: #7a7cd6;
  margin-top: 26px;
  font: 400 16px/26px Roboto, sans-serif;
`;

const FeaturesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 39px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const FeatureColumn = styled.div`
  flex: 1;
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;

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

const ImageColumn = styled.div`
  flex: 1;
`;

const FeatureImage = styled.img`
  width: 100%;
  aspect-ratio: 1.14;
  object-fit: contain;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default DemographicTargetingSection;