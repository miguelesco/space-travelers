/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { SpanMember, SpanNotMember } from './style';

const profilePage = () => (
  <div>
    <table className="table caption-top table-bordered table-striped">
      <thead>
        <tr>
          <th className="col-1"><strong>Mission</strong></th>
          <th className="col-8"><strong>Description</strong></th>
          <th className="col-1"><strong>Status</strong></th>
          <th className="col-2"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><strong>Thaicom</strong></th>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          <td className="align-middle"><SpanNotMember>NOT A MEMBER</SpanNotMember></td>
          <td className="text-center align-middle"><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
        </tr>
        <tr>
          <th><strong>Telstar</strong></th>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          <td className="align-middle"><SpanMember>Active Member</SpanMember></td>
          <td className="text-center align-middle"><button type="button" className="btn btn-outline-danger">Leave Mission</button></td>
        </tr>
        <tr>
          <th><strong>Iridium Next</strong></th>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          <td className="align-middle"><SpanNotMember>NOT A MEMBER</SpanNotMember></td>
          <td className="text-center align-middle"><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default profilePage;
