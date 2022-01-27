import axios from "axios";

const KEY = "AIzaSyDgFWim-JSQO5UYzFuDCiEr4ei-OUD0iME";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
