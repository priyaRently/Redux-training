import countNumber from "./counterReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    countNumber
})

export default rootReducer;