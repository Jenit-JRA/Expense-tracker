import React from "react";
import './Input.css';
function Input(props){
    return(
      <div style={{width:"100%"}}>
            <div id="input-containor">
            <div id="text-containor">
            <input type="text" id="expense-text" placeholder="Expense name" />
            <input type="number" id="expense-amount" placeholder="Amount" />
        </div>
  <div id="expense-button">
    <button type="submit">Add expenses</button>
  </div>
</div>
      </div>
    
    );
}
export default Input;