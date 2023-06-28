const initialState = {
    firstName: undefined,
    lastName: undefined,
};

export const getUserReducer = (state = initialState, action) => {
    if (action.type === "GET_USER_DATA") {
        return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        };
    }
    return state;
};