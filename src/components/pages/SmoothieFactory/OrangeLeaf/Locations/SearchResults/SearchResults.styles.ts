import styled from 'styled-components';

import theme from '@styles/theme';

export const Column = styled.div`
  display: flex;
  flex: 0 0 553px;
  height: 100%;
  flex-direction: column;
  order: 1;
  overflow-y: auto;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    order: 2;
    flex: 1;
  }
`;

export const InnerColumn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 39px 83px 0 83px;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    padding: 24px 32px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(24px, 2.38vw, 36px);
  margin-bottom: 15px;
  color: #23aa5d;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 30px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 22px;
  }
`;

export const FindLocation = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 13px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 2px;
  }
`;

export const FindLocationText = styled.span`
  font-size: 16px;
  color: #ed6c32;
  line-height: 32px;
  text-transform: lowercase;
  font-family: var(--century-gothic);
  text-decoration: underline;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 7px 15px;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 13px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    margin-bottom: 15px;
  }
  @media (max-width: calc(${theme.breakpoints.mobile}px)) {
    margin-bottom: 11px;
  }
`;

export const MagnifierSvg = styled.svg`
  height: 32px;
  width: 24px;
  margin-right: 16px;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    width: 18px;
    margin-right: 18px;
  }
`;

export const LocationSvg = styled.svg`
  height: 32px;
  width: 18px;
  margin-right: 4px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0;
  width: 100%;
  background: #ffffff;
  font-size: 16px;
  line-height: 32px;
  color: #474747;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const SearchResultList = styled.div`
  width: 100%;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;

  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
`;

export const Suggestion = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  background: #fff;
  &:hover {
    background: #f2f2f2;
  }
`;
