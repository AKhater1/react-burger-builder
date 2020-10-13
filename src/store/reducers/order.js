import * as actionTypes from '../actions/actionTypes';
import reducer from './burgerBuilder';

const initialState = {
    orders: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {}
        default:
            return state
    }
}

export default reducer;