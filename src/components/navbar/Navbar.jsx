/* eslint-disable linebreak-style */
import { NavLink } from 'react-router-dom';
import NavbarContainer, { Title, LeftNav, RightNav } from './styles';
import logo from '../../assets/images/planet.svg';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/profile',
    text: 'My profile',
  },
];

const Navbar = () => (
  <NavbarContainer>
    <LeftNav>
      <img src={logo} alt="user icon" />
      <Title>Space Travelers Hub</Title>
    </LeftNav>
    <RightNav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </RightNav>
  </NavbarContainer>
);

export default Navbar;
