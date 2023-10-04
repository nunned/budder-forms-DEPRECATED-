// HarvestPage.jsx

import { Link } from 'react-router-dom';
import RenameH from "../components/forms/harvested/renameH"

function HarvestPage() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <RenameH />
    </div>
  );
}

export default HarvestPage;
