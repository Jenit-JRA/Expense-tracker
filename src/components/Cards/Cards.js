import React from "react";
import './Cards.css';

function Cards({expense}) {

    console.log(expense)
    return (
        <div id="card-containor">
            <div className="card">
                <h3>{expense.expenseName}</h3>
                <div className="items">
                    <h5>{expense.date}</h5>
                    <h5>{expense.amount}</h5>
                </div>
                <button type="submit" value="Delete">
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Cards;