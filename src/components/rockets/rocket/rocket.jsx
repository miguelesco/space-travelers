/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import {
  RocketContainer, RocketImg, RocketTitle,
  RocketText, RocketBtn, CardBlock, Reserved,
} from './styles';

const Rocket = (props) => {
  const { rocket } = props;

  return (
    <RocketContainer className="card">
      <RocketImg>
        <img className="card-img" src={rocket.img} alt="rocket" />
      </RocketImg>
      <CardBlock className="card-body">
        <RocketTitle className="card-title">{rocket.name}</RocketTitle>
        <RocketText reserve={rocket.reserve} className="card-text">
          <Reserved className="position-absolute badge rounded-pill ">Reserved</Reserved>
          <p>{rocket.description}</p>
        </RocketText>
        <RocketBtn reserve={rocket.reserve} className="btn btn-primary">{rocket.reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</RocketBtn>
      </CardBlock>
    </RocketContainer>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: Proptypes.shape({
    id: Proptypes.number,
    name: Proptypes.string,
    description: Proptypes.string,
    img: Proptypes.string,
    reserve: Proptypes.bool,
  }).isRequired,
};
