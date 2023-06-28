const initialState = {
    firstName: undefined,
    lastName: undefined,
};

export const updateProfileReducer = (state = initialState, action) => {
    if (action === "UPDATE_PROFILE_DATA") {
        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
        };
    };
    return state;
};