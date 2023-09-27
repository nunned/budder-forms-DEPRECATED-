import './App.css';
import CreateImmPlantPackages from './components/forms/immature/CreateImmPlantPackages';
import CreatePlantings from './components/forms/immature/CreatePlantings';


function App() {

  return (
    <div className='app-wrap'>
      <CreatePlantings />
      <CreateImmPlantPackages />
    </div>
  )
}

export default App
