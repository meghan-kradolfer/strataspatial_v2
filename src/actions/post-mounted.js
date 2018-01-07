import { POST_MOUNTED } from "./constants";

export function postMounted(id) {
  return {
    type: POST_MOUNTED,
    payload: id || false
  };
}