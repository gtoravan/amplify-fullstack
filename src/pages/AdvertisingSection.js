import * as React from "react";
import styled from "styled-components";

const advertisingData = [
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e1f4b3da55ad859fe1469f14c89ec5216263a934ed9a223dd369516b5ccc8c4?apiKey=9354181eac784a43b2d64ee4bd7f05b0&",
        title: "Dominate Advertising Channels with Our Integrated Solutions!",
        description:
            "Our platform seamlessly integrates with Google AdX and PubMatic, empowering you to confidently publish and reach your target audience across top channels. Maximize your ad's visibility and impact with our advanced targeting and optimization tools, ensuring your message is heard by the right people at the right time.",
    },
];

function AdvertisingSection() {
    return (
        <SectionWrapper>
            {advertisingData.map((item, index) => (
                <AdvertisingItem key={index} {...item} />
            ))}
        </SectionWrapper>
    );
}

function AdvertisingItem({ imageUrl, title, description }) {
    return (
        <ItemWrapper>
            <ImageColumn>
                <AdvertisingImage src={imageUrl} alt="Advertising" loading="lazy" />
            </ImageColumn>
            <ContentColumn>
                <ContentWrapper>
                    <AdvertisingTitle>{title}</AdvertisingTitle>
                    <AdvertisingDescription>{description}</AdvertisingDescription>
                </ContentWrapper>
            </ContentColumn>
        </ItemWrapper>
    );
}

const SectionWrapper = styled.section`
  margin-top: 166px;
  width: 100%;
  max-width: 1195px;

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

const AdvertisingImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;

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
  align-self: stretch;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const AdvertisingTitle = styled.h2`
  color: #090fff;
  font: 500 36px/48px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AdvertisingDescription = styled.p`
  color: #7a7cd6;
  margin-top: 24px;
  font: 400 16px/26px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default AdvertisingSection;