import React, {useContext, useEffect} from "react";
import {ItemContext} from "../context/ItemContext";
import TodoList from "./TodoList";

const ContainerTodoList = () => {
    const itemState = useContext(ItemContext);
    const apiUrl = 'http://localhost:8080/api/items';
    const {items, loading, runSearch, deleteItem} = itemState;

    useEffect(() => {
        runSearch(apiUrl);
    //}, [runSearch, apiUrl]);
    });

    return (
        <div className="card mx-3">
            { loading ?
                <h1>Loading...</h1> :
                <TodoList items={items} deleteItem={deleteItem} />}
        </div>
    );
};

export default ContainerTodoList;
