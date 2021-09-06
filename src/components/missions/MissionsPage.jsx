/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import './MissionsPage.css';

const profilePage = () => (
  <div>
    <table className="table caption-top table-bordered table-striped">
      <thead>
        <tr>
          <th className="col-1">Mission</th>
          <th className="col-9">Description</th>
          <th className="col-1">Status</th>
          <th className="col-1"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Thaicom</th>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          <td className="text-center"><span className="not-member">NOT A MEMBER</span></td>
          <td><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
        </tr>
        <tr>
          <th>Telstar</th>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          <td className="text-center"><span className="active-member">Active Member</span></td>
          <td><button type="button" className="btn btn-outline-danger">Leave Mission</button></td>
        </tr>
        <tr>
          <th>Iridium Next</th>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          <td className="text-center"><span className="not-member">NOT A MEMBER</span></td>
          <td><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default profilePage;
