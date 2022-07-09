import httpService from "./http.service";
const productsEndpoint = "products/";

const productService = {
    getProducts: async () => {
        const { data } = await httpService.get(productsEndpoint);
        return data;
    },
    createComment: async (payload) => {
        const { data } = await httpService.put(
            productsEndpoint + payload._id,
            payload
        );
        
        return data;
    },
    
    removeProducts: async (productId) => {
        console.log("hi")
        const { data } = await httpService.delete(productsEndpoint + productId);
        console.log("data", data)
        return data;
    }
};
export default productService;

