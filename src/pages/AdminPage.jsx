// AdminPage.jsx

import { Link } from 'react-router-dom';
import AddStrains from '../components/forms/admin/addStrain';
import EditStrains from "../components/forms/admin/editStrain"
import AddLocation from '../components/forms/admin/addLocation';

function AdminPage() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <AddStrains />
      <EditStrains />
      <AddLocation />
    </div>
  );
}

export default AdminPage;
