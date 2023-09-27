import './App.css';
import CreateImmPlantPackages from './components/forms/immature/CreateImmPlantPackages';
import CreatePlantings from './components/forms/immature/CreatePlantings';
import SplitPlantings from './components/forms/immature/SplitPlantings';


function App() {

  return (
    <div className='app-wrap'>
      <CreatePlantings />
      <CreateImmPlantPackages />
      <SplitPlantings />
    </div>
  )
}

export default App
