import React from "react";
import TextField from "../textField";
import SelectField from "../selectField";
import TextAreaField from "../textAreaField";

const AdminForm = ({ category, onChange, onChange2, data, addNewProduct }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewProduct();
        console.log("submit");
    };
    return (
        <div className="d-flex flex-column p-2 m-2 shadow">
            <h6>Блок для добавления или редактирования товара</h6>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="id"
                    name="_id"
                    value={data._id}
                    onChange={onChange}
                />
                <TextField
                    label="Наименование"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                />
                <SelectField
                    label="Выбери категорию"
                    defaultOption="Choose..."
                    options={category}
                    onChange={onChange}
                    value={data.category}
                />
                <TextField
                    type="number"
                    label="Стоимость"
                    name="cost"
                    value={data.cost}
                    onChange={onChange}
                />
                <TextField
                    type="number"
                    label="Количество"
                    name="countProduct"
                    value={data.countProduct}
                    onChange={onChange}
                />
                <TextField
                    label="Ссылка на фото"
                    name="imageProduct"
                    value={data.imageProduct}
                    onChange={onChange}
                />
                <TextAreaField
                    label="Описание товара"
                    name="description"
                    value={data.description}
                    onChange={onChange2}
                />
                <button type="submit" className="btn btn-outline-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdminForm;
