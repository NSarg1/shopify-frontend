const INITIAL_STATE = {
    name: "Karen",
    age: 10,
    isProgrammer: false,
};

const commonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, name: "Narek" };
        case "CHANGE_AGE":
            return { ...state, age: 52 };
        default:
            return state;
    }
};

export default commonReducer;
