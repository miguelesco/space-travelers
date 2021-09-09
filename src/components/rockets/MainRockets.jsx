/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import Container from './styles';
import Rocket from './rocket/rocket';

const MainRockets = (props) => {
  const { rockets } = props;
  return (
    <Container className="container">
      {rockets.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} />
      ))}
    </Container>
  );
};

export default MainRockets;

MainRockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  })).isRequired,
};
