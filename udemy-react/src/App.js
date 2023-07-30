import './App.css';

import Expenses from './components/expense/Expenses';
import NewExpense from './components/newExpense/NewExpense';


function App() {
    
    return (
        <div>
        <NewExpense/>
        <Expenses/>
        </div>
    )
}


export default App;
