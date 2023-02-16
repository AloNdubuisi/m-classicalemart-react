//Implementing the Add item to cart functionality

export const addCart = (product)=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}
//Implementing the Deleting item from cart functionality

export const deleteCart = (product)=>{
    return{
        type: "DELETEITEM",
        payload:product
    }
}