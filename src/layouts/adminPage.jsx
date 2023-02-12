import React, { useState, useEffect } from "react";
import api from "../api";
import AdminTable from "../components/adminPageComponent/adminTable";
import AdminForm from "../components/adminPageComponent/adminForm";
import { getCategory } from "../store/category";
import { useSelector } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import Loading from "../components/loading";

const AdminPage = () => {
    const category = useSelector(getCategory());
    const { products, removeProduct, updateProduct, createProduct } =
        useProducts();
    const cc = {
        _id: "",
        name: "",
        category: "",
        cost: "",
        countProduct: "",
        imageProduct: "",
        description: ""
    };
    // const [products, setProducts] = useState();
    // const [category, setCategory] = useState();
    const [data, setData] = useState(cc);
    const adminProductDelete = (productId) => {
        // удаление продукта админ
        removeProduct(productId);
    };
    const adminProductEdit = (productId) => {
        // изменение продукта админ
        console.log(productId);
        setData(
            products.find((item) => {
                return item._id === productId;
            })
        );
    };
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleChange2 = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const addNewProduct = () => {
        // добавление нового продукта с администратора
        if (
            data._id &&
            data.category &&
            data.name &&
            data.cost &&
            data.countProduct &&
            data.imageProduct &&
            data.description
        ) {
            if (
                !products.some((c) => {
                    return c._id === data._id;
                })
            ) {
                const newData = { ...data, category: category[data.category] };
                // setProducts([...products, newData]);
                console.log("newDate", newData);
                createProduct(newData);
                setData(cc);
            } else {
                updateProduct(data);
                setData(cc);
            }
        }
    };
    if (products && category) {
        return (
            <div className="d-flex m-2">
                <AdminForm
                    category={category}
                    onChange={handleChange}
                    onChange2={handleChange2}
                    data={data}
                    addNewProduct={addNewProduct}
                />
                <AdminTable
                    products={products}
                    adminProductDelete={adminProductDelete}
                    adminProductEdit={adminProductEdit}
                />
            </div>
        );
    } else return <Loading />;
};

export default AdminPage;
