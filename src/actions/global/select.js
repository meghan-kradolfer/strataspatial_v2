import { SELECTED } from "../constants";

export function select(id) {
  return {
    type: SELECTED,
    payload: id || false
  };
}