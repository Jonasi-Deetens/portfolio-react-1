import { Banner } from './components/Banner';
import './index.css';
import imageList from './assets/imageList';

function App() {
  return (
    <div className="App">
      <header>
        < Banner imageList={imageList} />
      </header>
    </div>
  );
}

export default App;
