// HarvestPage.jsx

import { Link } from 'react-router-dom';
import PlantWasteComponent from '../components/forms/form-comps/PlantWasteComponent';

function HarvestPage() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <>Coming Soon</>
      <PlantWasteComponent />
      {/* forms */}
    </div>
  );
}

export default HarvestPage;
