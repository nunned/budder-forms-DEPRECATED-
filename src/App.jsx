import './App.css';
// import AutoComplete from './components/AutoComplete';
import CreateImmPlantPackages from './components/forms/immature/CreateImmPlantPackages';
import CreatePlantings from './components/forms/immature/CreatePlantings';


function App() {

  return (
    <div className='app-wrap'>
      <CreatePlantings />
      <CreateImmPlantPackages />
      {/* <AutoComplete /> */}
    </div>
  )
}

export default App
