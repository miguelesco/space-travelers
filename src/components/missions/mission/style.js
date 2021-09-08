/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const SpanMember = styled.span`
background-color: gray;
border-radius: 5px;
color: white;
font-weight: bold;
padding: 5px;
${(props) => {
    if (props.member) {
      return (
        `
      background-color: #18a2b8;
      `
      );
    }
    return '';
  }}
`;

export const JoinBtn = styled.button`
  ${(props) => {
    if (props.member) {
      return (
        `
        background-color: transparent; 
        color: red;
        border: 1px solid red;
        `
      );
    }
    return '';
  }}
`;
