import './App.css';
import ChangePBStrains from './components/forms/immature/ChangePBStrains';
import CreateImmPlantPackages from './components/forms/immature/CreateImmPlantPackages';
import CreatePlantings from './components/forms/immature/CreatePlantings';
import RenamePlantBatches from './components/forms/immature/RenamePB';
import SplitPlantings from './components/forms/immature/SplitPlantings';


function App() {

  return (
    <div className='app-wrap'>
      <CreatePlantings />
      <CreateImmPlantPackages />
      <SplitPlantings />
      <RenamePlantBatches />
      <ChangePBStrains />
    </div>
  )
}

export default App
