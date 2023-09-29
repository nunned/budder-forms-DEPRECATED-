// VegPage.jsx

import { Link } from 'react-router-dom';
import AssignTTVP from '../components/forms/veg/assignTTVP';
import ReplaceVPT from '../components/forms/veg/replaceVPT';
import ChangeVPS from '../components/forms/veg/changeVPS';
import ChangeVPL from '../components/forms/veg/changeVPL';

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
      <ChangeVPS />
      <ChangeVPL />
      {/* forms */}
    </div>
  );
}

export default VegPage;
