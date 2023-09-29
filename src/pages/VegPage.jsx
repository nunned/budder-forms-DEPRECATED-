// VegPage.jsx

import { Link } from 'react-router-dom';
import AssignTTVP from '../components/forms/veg/assignTTVP';
import ReplaceVPT from '../components/forms/veg/replaceVPT';

function VegPage() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <AssignTTVP />
      <ReplaceVPT />
      {/* forms */}
    </div>
  );
}

export default VegPage;
