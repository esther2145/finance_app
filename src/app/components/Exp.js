import React, { useState } from 'react';
import './App.css';

function App() {
  const [expense, setExpense] = useState({ name: '', amount: '', category: '' });
  const [expensesList, setExpensesList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expense.name || !expense.amount || !expense.category) {
      alert('Please fill in all fields');
      return;
    }
    setExpensesList([
      ...expensesList,
      { ...expense, id: Math.random().toString() }
    ]);
    setExpense({ name: '', amount: '', category: '' });  // Reset form
  };

  const handleDeleteExpense = (id) => {
    setExpensesList(expensesList.filter(exp => exp.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <form onSubmit={handleAddExpense} className="expense-form">
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={expense.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={expense.category}
          onChange={handleInputChange}
        />
        <button type="submit">Add Expense</button>
      </form>

      <h2>Expense List</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expensesList.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.name}</td>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>
                <button onClick={() => handleDeleteExpense(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-expenses">
        <h3>Total Expenses: ${expensesList.reduce((acc, exp) => acc + parseFloat(exp.amount), 0).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;
