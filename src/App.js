import React,{useState} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Grocery items',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
   title: 'Furniture set',
    amount: 1200, 
    date: new Date(2021, 2, 12)
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 3500,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Curtains',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler =  expenses => {
   setExpenses((prevExpenses) =>{
    return [expenses, ...prevExpenses];
   });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;
