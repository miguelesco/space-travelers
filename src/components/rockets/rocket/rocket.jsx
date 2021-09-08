/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../../redux/rockets/rockets.actions';
import {
  RocketContainer, RocketImg, RocketTitle,
  RocketText, RocketBtn, CardBlock, Reserved,
} from './styles';

const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  const handdleReservation = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <RocketContainer className="card">
      <RocketImg>
        <img className="card-img" src={rocket.img} alt="rocket" />
      </RocketImg>
      <CardBlock className="card-body">
        <RocketTitle className="card-title">{rocket.name}</RocketTitle>
        <RocketText reserved={rocket.reserved} className="card-text">
          <Reserved className="position-absolute badge rounded-pill ">Reserved</Reserved>
          <p>{rocket.description}</p>
        </RocketText>
        <RocketBtn reserved={rocket.reserved} onClick={() => handdleReservation(rocket.id)} className="btn btn-primary">{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</RocketBtn>
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
    reserved: Proptypes.bool,
  }).isRequired,
};
