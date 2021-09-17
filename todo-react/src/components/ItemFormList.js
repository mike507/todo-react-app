import React from "react";

const ItemFormList = ({ name, description, deleteItem, index}) => {
    return (
        <div className="row">
            <div className="col-3">
                <input type="text" className="form-control" value={name} name="name"
                       disabled/>
            </div>
            <div className="col-7">
                <input type="text" className="form-control" value={description}  name="description" placeholder="Input description"
                       disabled/>
            </div>
            <div className="col-1">
                 <button type="button" className="btn btn-danger"
                         onClick={() => deleteItem(index)}
                 ><i className="fa fa-trash" title="delete"></i>
                 </button>
            </div>
        </div>
    )};

export default ItemFormList;