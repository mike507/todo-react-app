import React, {useContext, useState} from "react";
import {ItemContext} from "../context/ItemContext";

const ItemFormInput = () => {
    const [newItem, setNewItem] = useState({
        name: "",
        description: ""
    });
    const itemState = useContext(ItemContext);
    const {addItem} = itemState;
    const apiUrl = 'http://localhost:8080/api/items';

    const handleInputChange = (event) => {
        //setNewItem({...newItem, [event.target.name]: event.target.value});
        console.log(event);
        const {target:{name, value}} = event;
        setNewItem({...newItem, [name]:value});
    }

    const handleOnClick = (event) => {
        event.preventDefault();
        addItem(newItem, apiUrl);
        setNewItem({
            name: "",
            description: ""
        });
    }
    return (
            <div className="card mx-3">
                <form className="card-body px-4">
                    <div className="row">
                        <div className="col-3 p-2">
                            <input type="text" className="form-control" value={newItem.name} name="name" placeholder="Input name"
                                   onChange={handleInputChange} />
                        </div>
                        <div className="col-7 p-2">
                            <input type="text" className="form-control" value={newItem.description}  name="description" placeholder="Input description"
                                   onChange={handleInputChange} />

                        </div>
                        <div className="col-1 p-2">
                            <button type="button" className="btn btn-primary"
                                    onClick={handleOnClick}
                            ><i className="fa fa-plus-square" title="add new item"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

    )};

export default ItemFormInput;