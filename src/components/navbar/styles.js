/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../styles/breakPoints';

const NavbarContainer = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.05);
  ${flex('row', 'center', 'space-between')};
  padding: 1.5rem 2.5rem;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  ul {
    flex-direction: row;
    display: flex;
    gap: 0.5rem;
    list-style: none;
    align-items: center;
    li {
      font-size: 0.8rem;
      font-weight: 700;
      color: #121212;
      a {
        text-decoration: none;
      }
      a:hover {
        color: blue;
      }
      a:active, a:focus {
        text-decoration: underline blue; 
        color: blue;
      }
    }
  }
`;

export const Title = styled.h1`
  color: blue;
  font-size: 28px;
  font-weight: 700;
`;

export const LeftNav = styled.div`
  ${flex('row', 'center', 'flex-start')};
  width: 100%;
  height: 100%;
  gap: 2rem;
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const RightNav = styled.div`
  ${flex('row', 'center', 'flex-end')};
  padding: 0.7rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export default NavbarContainer;
