import axios from "axios";
import { FETCH_LAST_FM, LAST_FM_API_KEY, LAST_FM_API_URL } from "../constants";

export function fetchLastFm(track, artist, album) {
  const request = axios.get(`${LAST_FM_API_URL}&api_key=${LAST_FM_API_KEY}&artist=${artist}&album=${album}&format=json`);
  return {
    type: FETCH_LAST_FM,
    payload: request
  };
}
