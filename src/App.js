import './App.css';
import '../src/records.json';
import { HEADER } from './components/header';
import { SEARCHPARAMS } from './components/searchparams';
import { Buttons } from './components/buttons';
import {RANDOM} from './queries/random'

function App() {
  return (
    <div className="App">
      <HEADER />
      <Buttons />
      <SEARCHPARAMS />
      <RANDOM />
    </div>
  );
}

export default App;
