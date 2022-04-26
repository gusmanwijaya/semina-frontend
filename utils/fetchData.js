import axios from "../configs";

const getData = async (url, params, token) => {
  if (!token) {
    return await axios.get(`${url}`, {
      params,
    });
  } else {
    return await axios.get(`${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

const postData = async (url, payload, token) => {
  if (!token) {
    return await axios.post(`${url}`, payload);
  } else {
    return await axios.post(`${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

export { getData, postData };
