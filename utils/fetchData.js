import axios from "axios";
import Cookies from "js-cookie";

export async function getData(url, params) {
  const token = Cookies.get("token");

  return await axios.get(`${process.env.NEXT_PUBLIC_API}/${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload) {
  const token = Cookies.get("token");

  return await axios.post(`${process.env.NEXT_PUBLIC_API}/${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
