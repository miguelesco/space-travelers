/* eslint-disable linebreak-style */
import { useSelector } from 'react-redux';
import Container from './styles';
import Rocket from './rocket/rocket';

const MainRockets = () => {
  const { rocketReducer } = useSelector((state) => state);
  return (
    <Container className="container">
      {rocketReducer.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} />
      ))}
    </Container>
  );
};

export default MainRockets;
