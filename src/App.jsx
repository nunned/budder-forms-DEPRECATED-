import './App.css';
import CreateImmPlantPackages from './components/forms/immature/CreateImmPlantPackages';
import CreatePlantings from './components/forms/immature/CreatePlantings';
import RenamePlantBatches from './components/forms/immature/RenamePlantBatches';
import SplitPlantings from './components/forms/immature/SplitPlantings';


function App() {

  return (
    <div className='app-wrap'>
      <CreatePlantings />
      <CreateImmPlantPackages />
      <SplitPlantings />
      <RenamePlantBatches />
    </div>
  )
}

export default App
