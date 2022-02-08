const initialState = {
    products: [
        {
            id: 1,
            title: "Hicoder",
            category: "programer",
        }
    ],
};


export const ProductReducer = (state= initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }

}

export default ProductReducer;