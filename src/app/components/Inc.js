import React, { useState } from "react";
import "./App.css";

function Inc() {
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeList, setIncomeList] = useState([]);

  const addIncome = () => {
    if (incomeSource && !isNaN(incomeAmount) && incomeAmount > 0) {
      const newIncome = {
        source: incomeSource,
        amount: parseFloat(incomeAmount),
      };
      setIncomeList([...incomeList, newIncome]);
      setIncomeSource("");
      setIncomeAmount("");
    } else {
      alert("Please enter a valid income source and amount.");
    }
  };

  const removeIncome = (index) => {
    const newIncomeList = incomeList.filter((_, i) => i !== index);
    setIncomeList(newIncomeList);
  };

  const totalIncome = incomeList.reduce(
    (total, income) => total + income.amount,
    0
  );

  return (
    <div className="App">
      <h1>Income Tracker</h1>

      <div className="form-section">
        <label htmlFor="income-source">Income Source:</label>
        <input
          type="text"
          id="income-source"
          value={incomeSource}
          onChange={(e) => setIncomeSource(e.target.value)}
          placeholder="Enter income source"
        />

        <label htmlFor="income-amount">Amount ($):</label>
        <input
          type="number"
          id="income-amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
          placeholder="Enter income amount"
        />

        <button onClick={addIncome}>Add Income</button>
      </div>

      <div className="income-list">
        <h3>Income Sources</h3>
        <ul>
          {incomeList.map((income, index) => (
            <li key={index}>
              {income.source}: ${income.amount.toFixed(2)}{" "}
              <button onClick={() => removeIncome(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-income">
        <h3>Total Income: ${totalIncome.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Inc;
