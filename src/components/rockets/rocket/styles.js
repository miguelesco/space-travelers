/* eslint-disable linebreak-style */
import styled from 'styled-components';
import device, { flex } from '../../../styles/breakPoints';

export const RocketContainer = styled.div`
  ${flex('row', 'flex-start', 'flex-start')};
  flex-wrap: wrap;
  margin: 20px 0;
  @media ${device.lg} {
    flex-direction: column;
  }
`;

export const RocketImg = styled.div`
  width: 35%;
  height: 100%;
  background-color: #000;
  @media ${device.lg} {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

export const CardBlock = styled.div`
  width: 65%;
`;

export const RocketTitle = styled.h2`
  margin-top: 0;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const RocketText = styled.div`
  p {
    text-indent: ${(props) => (props.reserve ? '4.8em;' : '0')};
    font-size: 0.8rem;
    line-height: 1.5;
  }
  small {
    ${(props) => (props.reserve ? 'display: block;' : 'display: none;')}
  }
`;

export const Reserved = styled.small`
  font-size: 0.5rem;
  background-color: skyblue;
`;

export const RocketBtn = styled.button`
  ${(props) => {
    if (props.reserve) {
      return (
        `
        background-color: transparent; 
        color: black;
        border: 1px solid black;
        opacity: 0.7;
        `
      );
    }
    return '';
  }}
`;
