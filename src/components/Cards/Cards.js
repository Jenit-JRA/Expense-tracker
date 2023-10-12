import React from "react";
import './Cards.css';
import moment from "moment/moment";

function Cards({expense,onDelete}) {
    const handleDelete = () => {
        onDelete(expense.id);
      };
    return (
        <div id="card-containor">
            <div className="card">
                <h3>{expense.expenseName}</h3>
                <div className="items">
                    <h5>{moment(expense.date).format("YYYY-MM-DD")}</h5>
                    <h5>{expense.amount}</h5>
                    <h5>{expense.description}</h5>
                </div>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Cards;