
import React, { useState } from 'react';
import './InputExpense.css';

function InputExpense({ onAddExpense }) {
  const [expenseName, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const addExpenseHandler = () => {
    const newExpense =
    {
      id: new Date().getTime(),
      expenseName,
      date,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);

    setName('');
    setDate('');
    setAmount('');
  };

  return (
    <div id="input-containor">
      <input
        type="text"
        placeholder="Expense name"
        value={expenseName}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpenseHandler}>Add Expense</button>
    </div>
  );
}

export default InputExpense;
