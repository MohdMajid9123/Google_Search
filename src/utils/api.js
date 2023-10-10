import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  // key: "AIzaSyDZgl-Oe6NKlRvVibcbx6lMlcFTAje2R28",
  // cx: "06091437de0d14233",
  key: "AIzaSyABZgOzb25Z_A1NlRnh4g6TQrGFphF93Ls",
  cx: "c4c714169916641db",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
