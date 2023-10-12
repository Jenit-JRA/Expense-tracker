import './App.css';
import React,{useState,useEffect} from 'react';
import sampledata from './sample-data.json';
import Header from './components/Header/Header';
import LocationInfo from './components/LocationInfo/LocationInfo';
// import Input from './components/Input/Input';
import InputExpense from './components/InputExpense/InputExpense';
import Cards from './components/Cards/Cards';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  const [expenses, setExpenses] = useState(sampledata);
 useEffect(() => 
 {
   fetch('/sample-data.json')
    .then((response) => response.json())
    .then((data) => setExpenses(data));
 }, 
 []);
 const addExpenseHandler = (newExpense) => {
  setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
};
const deleteExpense = (expenseId) => {
  setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
};
  return (
    <div className="App">
     <Header/>
     <LocationInfo/>
     {/* <Input/> */}
     <InputExpense onAddExpense={addExpenseHandler} />
     <Layout data={expenses} setExpense={setExpenses} onDelete={deleteExpense}/>
     <Footer/>
  
    </div>
  );
}
export default App;
