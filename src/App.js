import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css'

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  
  function switchDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={switchDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
