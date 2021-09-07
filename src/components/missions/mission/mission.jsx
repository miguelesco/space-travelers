/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import { SpanNotMember } from './style';

const Mission = (props) => {
  const { mission } = props;

  return (
    <tr>
      <th><strong>{mission.name}</strong></th>
      <td>{mission.description}</td>
      <td className="align-middle"><SpanNotMember>NOT A MEMBER</SpanNotMember></td>
      <td className="text-center align-middle"><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
    </tr>
  );
};

export default Mission;

Mission.propTypes = {
  mission: Proptypes.shape({
    id: Proptypes.string,
    name: Proptypes.string,
    description: Proptypes.string,
  }).isRequired,
};
