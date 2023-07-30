import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../ui/Card'
import {useState} from 'react'

function ExpenseItem({expenseDate,expenseTitle,expenseAmount}){
    //destructuring props
    const [title, setTitle]=useState(expenseTitle)
    const updateHandler=()=>{
        setTitle("updated!!");
    }
    return (
        <Card className="expense-item">
           <ExpenseDate expenseDate={expenseDate}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
            <button onClick={updateHandler}>Update</button>
        </Card>
    )
}

export default ExpenseItem;