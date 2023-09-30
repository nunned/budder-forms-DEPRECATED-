// WastePage.jsx

import { Link } from 'react-router-dom';
import RecordLPW from '../components/forms/waste/recordLPW';

function WastePage() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <RecordLPW />
      {/* forms */}
    </div>
  );
}

export default WastePage;
