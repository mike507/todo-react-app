import React, {createContext, useState} from "react";
import axios from "axios";

export const ItemContext = createContext({
    items: [],
    loading: true
});

const ItemContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = (apiUrl) => {
        axios
            .get(apiUrl)
            .then(response => {
                setItems(response.data._embedded.items);
                //console.log(items);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    };

    const addItem = (newItem, apiUrl) => {
        axios
            .post(apiUrl, newItem)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with inserting data",
                    error
                );
            });
    };

    const deleteItem = selfIndex => {
        axios
            .delete(selfIndex.href)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with deleting and fetching data",
                    error
                );
            })};

    const itemsState = {items, loading, runSearch, deleteItem, addItem};
    return (
        <ItemContext.Provider value={itemsState}>
            {props.children}
        </ItemContext.Provider>
    );

};

export default ItemContextProvider;
