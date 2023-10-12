// AdminPage.jsx

import { Link } from 'react-router-dom';
import AddStrains from '../components/forms/admin/addStrain';
import EditStrains from "../components/forms/admin/editStrain"
import AddLocation from '../components/forms/admin/addLocation';
import EditLocation from '../components/forms/admin/editLocation';
import AddItem from '../components/forms/admin/addItem';

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
      <EditLocation />
      <AddItem />
    </div>
  );
}

export default AdminPage;
