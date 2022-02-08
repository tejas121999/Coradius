import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
    data: userReducer
})

export default rootReducer;