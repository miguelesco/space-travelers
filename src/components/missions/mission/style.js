/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const SpanMember2 = styled.span`
background-color: #18a2b8;
border-radius: 5px;
color: white;
padding: 5px;
font-weight: bold;
`;

export const SpanMember = styled.span`
background-color: gray;
border-radius: 5px;
color: white;
font-weight: bold;
padding: 5px;
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
