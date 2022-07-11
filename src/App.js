import logo from './logo.svg';
import './App.css';
import AppPage from "./components/AppPage";
import Top from "./components/Top"

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
        <AppPage/>
      </header>
    </div>
  );
}

export default App;
