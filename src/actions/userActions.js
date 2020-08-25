import { SET_USER } from "./actionDefinition";

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});