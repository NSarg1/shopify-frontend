import { combineReducers } from "redux";

import commonReducer from "./common/common.reducer";

const rootReducer = combineReducers({
    common: commonReducer,
});

export default rootReducer;
