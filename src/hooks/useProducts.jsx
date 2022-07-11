import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import productsService from "../services/products.service";
import { toast } from "react-toastify";

const ProductsContext = React.createContext();

export const useProducts = () => {
    return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getProductsList();
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function getProductsList() {
        try {
            const { content } = await productsService.getProducts();
            setProducts(content);
            setLoading(false);
        } catch (error) {
            // errorCatcher(error);
        }
    }

    async function removeProduct(id) {
        try {
            const { content } = await productsService.removeProducts(id);
            if (content === null) {
                setProducts((prevState) =>
                    prevState.filter((c) => c._id !== id)
                );
            }
        } catch (error) {
            errorCatcher(error);
        }
    }

    async function createProduct(data) {
        try {
            const { content } = await productsService.createProducts(data);
            setProducts((prevState) => [...prevState, content]);
            console.log("content",content)
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function updateProduct(data) {
        try {
            const { content } = await productsService.updateProducts(data);
            if (content){
              const newProducts = [...products];
            console.log(content);
            const elementIndex = products.findIndex((el)=> el._id == data._id);
            console.log(elementIndex);
            newProducts[elementIndex] = {...data};
            console.log(newProducts); 
            setProducts(newProducts)
            }
            
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <ProductsContext.Provider
            value={{ isLoading, products, removeProduct, createProduct, updateProduct }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

ProductsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};