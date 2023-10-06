// AdminPage.jsx

import { Link } from 'react-router-dom';
import AddStrains from '../components/forms/admin/addStrain';
import EditStrains from "../components/forms/admin/editStrain"

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
    </div>
  );
}

export default AdminPage;
