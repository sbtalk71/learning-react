import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeListing from './components/EmployeeListing';

function App() {
  return (
    <>
    <div className="App">
      <h1>React CRUD Operations</h1>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmployeeListing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );


}

export default App;
