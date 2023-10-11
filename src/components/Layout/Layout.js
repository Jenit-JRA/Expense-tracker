import React from "react";
import './Layout.css';
import Cards from "../Cards/Cards";
import data from "../../sample-data.json"

function Layout({
    data
})
{
    return(
        <div id="card-containor">
     {data.map((expenseItem,index)=>{
            return(
<Cards expense={expenseItem}/>
            )
             
        })}   
        </div>
    )
}
export default Layout;