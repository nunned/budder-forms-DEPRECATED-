// FlowerPage.jsx

import { Link } from 'react-router-dom';
import ReplaceFPT from '../components/forms/flowering/replaceFPT';
import ChangeFPS from '../components/forms/flowering/changeFPS';
import ChangeFPL from '../components/forms/flowering/changeFPL';
import ChangeFPGP from '../components/forms/flowering/changeFPGP';
import FloweringPCBL from '../components/forms/flowering/floweringPCBL';
import DestroyFP from '../components/forms/flowering/destroyFP';

function FlowerPage() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <ReplaceFPT />
      <ChangeFPS />
      <ChangeFPL />
      <ChangeFPGP />
      <FloweringPCBL />
      <DestroyFP />
      {/* forms */}
    </div>
  );
}

export default FlowerPage;
