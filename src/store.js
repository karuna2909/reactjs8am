import { combineReducers, legacy_createStore } from "redux";

import cartReducer from "./redux/reducer/CartReducer";

import studentReducer from "./redux/reducer/studentReducer";

const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer
})


const store=legacy_createStore(reducers)

export default  store