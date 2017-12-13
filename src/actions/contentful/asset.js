import axios from "axios";
import { FETCH_SINGLE_ASSET, API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../constants";

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);
  return {
    type: FETCH_SINGLE_ASSET,
    payload: request
  };
}
