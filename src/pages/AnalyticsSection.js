import * as React from "react";
import styled from "styled-components";

const data = [
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/15d72352a26dddd5b49919ae046ff5ddac69f85d166999f7f42456a270328c96?apiKey=9354181eac784a43b2d64ee4bd7f05b0&",
        title: "Advanced Analytics and Observability",
        description:
            "Our platform offers comprehensive analytics to track and optimize your marketing campaign performance. Campaign managers can easily monitor costs, targets, and other key metrics, providing full observability for better decision-making and campaign success.",
    },
];

function AnalyticsSection() {
    return (
        <SectionWrapper>
            {data.map((item, index) => (
                <AnalyticsItem key={index} {...item} />
            ))}
        </SectionWrapper>
    );
}

function AnalyticsItem({ imageUrl, title, description }) {
    return (
        <ItemWrapper>
            <ImageColumn>
                <Image src={imageUrl} alt="Analytics" loading="lazy" />
            </ImageColumn>
            <ContentColumn>
                <ContentWrapper>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </ContentWrapper>
            </ContentColumn>
        </ItemWrapper>
    );
}

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
  width: 59%;
  margin-left: 0;

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

export default AnalyticsSection;