import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import { Welcome } from './components/Welcome';
import {Parent} from './components/Parent';

function App() {
    /*
    return (
        <div className="App">
            <Greet name="Bruce"/>
            <Greet name="Clark">
              He is the
              </Greet>
            <Greet name="Thor"/>
            <Welcome name="Rana"/>
            <Welcome name="Kabir"/>
            <Welcome name="Jugnu"/>
        </div>
    );*/
    return(
        <div className="App">
            <Parent/>
        </div>
        
    );
}

export default App;
