import { SHOW_TOAST } from "../constants/actionTypes";

/**
 *
 * @param {String} type - error, success, warning etc.
 * @param {String} message - toast message
 */
export const showToast = (type, message) => ({
  type: SHOW_TOAST,
  payload: {
    message,
    type
  }
});
