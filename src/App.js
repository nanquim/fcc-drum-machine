import './App.css';
import Pad from './components/Pads';
import PADS from './data/pads';


function App() {
  return (
    <div id="container">
      <div id="drum-machine">
        <div id="pads">
          <div className="row">
            {PADS.map((pad, index) => {
              return ( 
                <div className="column">
                  <Pad key={index} id={index} pad={pad.key} src={pad.src} />
                </div> )
            })}
          </div>
        </div>
        <div id="controls">
            
          </div>
      </div>
    </div>
  );
}

export default App;
