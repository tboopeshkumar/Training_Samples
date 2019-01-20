import { SHOW_TOAST } from "../constants/actionTypes";

export const showToast = (type, message) => {
    console.log("show toast called");
    return {
        type: SHOW_TOAST,
        payload: {
            message,
            type
        }
    }
};
