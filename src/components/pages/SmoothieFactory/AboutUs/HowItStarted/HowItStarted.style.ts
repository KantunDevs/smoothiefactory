import styled from 'styled-components';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FloatingOrangeShapeImage = styled(FloatingImage)`
  bottom: -50%;
  position: absolute;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    top: -90%;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    top: -60%;
  }
`;

export const FloatingCucumber = styled(FloatingImage)`
  bottom: -100%;
  position: absolute;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    bottom: -70%;
  }
`;

export const FloatingGreenShapeImage = styled(FloatingImage)`
  bottom: -38%;
  position: absolute;
  left: initial;
  right: initial;
`;

export const FloatingIconImage = styled(FloatingImage)`
  margin-bottom: clamp(8px, 2.64vw, 40px);
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  text-align: center;
  color: #000000;
  max-width: clamp(329px, 35.71vw, 540px);
`;

export const WoodBg = styled.div`
  width: 100%;
  min-height: clamp(835px, 62.56vw, 946px);
  position: relative;
  display: flex;
  gap: clamp(101px, 9.52vw, 144px);
  padding-top: clamp(4px, 1.19vw, 18px);
  padding-inline: 32px;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 33px;
    justify-content: flex-start;
  }
`;

export const StoreBg = styled.div`
  width: 100%;
  min-height: clamp(470px, 49.66vw, 751px);
  position: relative;
  margin-top: -6%;
  margin-bottom: clamp(56px, 6.8vw, 103px);
`;

export const PersonCard = styled.div`
  min-height: clamp(330px, 40.27vw, 609px);
  width: clamp(271px, 33.13vw, 501px);
  background: #fff;
  padding: clamp(23px, 2.84vw, 43px) clamp(21px, 2.57vw, 39px) clamp(28px, 3.5vw, 53px) clamp(21px, 2.57vw, 39px);
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: 45px;
  color: #23aa5d;
  text-align: center;
`;

export const WoodBgTitle = styled.h1`
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  color: #ffffff;
  text-align: center;
  margin-top: clamp(130px, 14.02vw, 212px);
  z-index: 1;
  max-width: clamp(363px, 38.82vw, 587px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-top: 0;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: clamp(56px, 4.76vw, 72px);
  margin-bottom: clamp(193px, 21.16vw, 320px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  max-width: 360px;
`;

export const InfoCardTitle = styled.h3`
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(24px, 2.38vw, 36px);
  color: #474747;
  text-align: center;
  margin-bottom: clamp(8px, 1.58vw, 24px);
`;

export const InfoCardText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #421b00;
  text-align: center;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 93px;
  justify-content: center;
  margin-bottom: clamp(114px, 16.79vw, 254px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 180px;
  }
`;

export const CtaButton = styled.button`
  font-size: clamp(15px, 1.05vw, 16px);
  line-height: clamp(22px, 1.58vw, 24px);
  text-align: center;
  background-color: #23aa5d;
  padding: 12px clamp(12px, 1.58vw, 24px) 8px clamp(12px, 1.58vw, 24px);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 32px;
`;
