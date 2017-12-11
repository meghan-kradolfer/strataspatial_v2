import axios from "axios";
import { FETCH_MUSIC_POSTS, API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../constants";

export function fetchMusicPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_MUSIC_POSTS,
    payload: request
  };
}
