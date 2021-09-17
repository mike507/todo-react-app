import React from 'react';
import ItemFormList from "./ItemFormList";

const TodoList = ({ items, deleteItem }) => (
    <form className="card-body">
       <ul className="list-group m3">
               {items.map(({name, description, _links}, index) => (
                   <li className="list-group-item" key={index.toString()}>
                       <ItemFormList name={name} description={description} deleteItem={deleteItem} index={_links.self} />
                   </li>
               ))}
        </ul>
    </form>
);

export default TodoList;
