import axios from "axios";
import { FETCH_POSTS, API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../constants";

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
