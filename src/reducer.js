export const initialState = {
    cart: [],
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case "REMOVE_TO_CART":
            // const newCartState = state.cart.filter(
            //     (item) => item !== action.id
            // );

            const newCartState = [...state.cart];
            newCartState.splice(action.id, 1);
            return {
                ...state,
                cart: newCartState,
            };
        default:
            return { ...state };
    }
};

export default reducer;
