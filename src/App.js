import './App.css';

import NavBar from './navbar.js'
import HeroComponent from './herocomponent.js'
import HomepageContent from './homepagecontent.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroComponent />
      <HomepageContent />
    </div>
  );
}

export default App;
