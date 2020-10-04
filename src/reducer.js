export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) => {
    return cart?.reduce((acc, item) => {
        return (acc += item.price);
    }, 0);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case "REMOVE_TO_CART":
            // const newCartState = [...state.cart];
            // const itemIndex = state.cart.indexOf(action.id);
            // newCartState.splice(itemIndex, 1);
            // return {
            //     ...state,
            //     cart: newCartState,
            // };

            // return {
            //     ...state,
            //     cart: [...state.cart.filter(item => item.id !== action.id)]
            // }

            const newCartState = [...state.cart];
            const itemIndex = state.cart.findIndex(p => p.id === action.id);
            console.log(itemIndex, action.id);
            newCartState.splice(itemIndex, 1);
            return {
                ...state,
                cart: newCartState,
            };
        default:
            return { ...state };
    }
};

export default reducer;
