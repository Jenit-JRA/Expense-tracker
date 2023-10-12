import React from "react";
import './Layout.css';
import Cards from "../Cards/Cards";
import data from "../../sample-data.json"

function Layout({data, setExpense,onDelete})
{
    return(
        <div id="card-containor">
     {data.map((expenseItem,index)=>{
            return(
<Cards key={expenseItem.id} expense={expenseItem} onDelete={onDelete}/>
            )
             
        })}   
        </div>
    )
}
export default Layout;
