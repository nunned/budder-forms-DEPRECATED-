import './App.css';
import ChangeIPGP from './components/forms/immature/ChangeIPGP';
import ChangePBLocation from './components/forms/immature/ChangePBL';
import ChangePBStrains from './components/forms/immature/ChangePBStrains';
import CreateImmPlantPackages from './components/forms/immature/CreateIPP';
import CreatePlantings from './components/forms/immature/CreatePlantings';
import RenamePlantBatches from './components/forms/immature/RenamePB';
import SplitPlantings from './components/forms/immature/SplitPlantings';
import DestroyIP from './components/forms/immature/DestroyIP';
import RecordPBW from './components/forms/immature/RecordPBW';


function App() {

  return (
    <div className='app-wrap'>
      <CreatePlantings />
      <CreateImmPlantPackages />
      <SplitPlantings />
      <RenamePlantBatches />
      <ChangePBStrains />
      <ChangePBLocation />
      <ChangeIPGP />
      <DestroyIP />
      <RecordPBW />
    </div>
  )
}

export default App
