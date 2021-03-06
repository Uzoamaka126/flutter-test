import axios from "axios";

export const postCall = async (url, data, headers) => {
  let finalData = data;
  return axios({
    method: "post",
    url: url,
    data: finalData,
    headers: headers,
    baseURL: `${process.env.VUE_APP_BASE_URL}`,
  }).catch((error) => {
    if (error.toString().includes("Network Error")) {
      // Handle Network Error
      return false;
    } else if (error.toString().includes("401")) {
      // Handle 401 Error
      return "Token Expired";
    } else {
      console.log(error);
      // Handle General Error
    }
    document.body.classList.remove("network-active");
    return error.response();
  });
};

export const postCallFlutter = async (url, data, headers) => {
  let finalData = data;
  return axios({
    method: "post",
    url: url,
    data: finalData,
    headers: headers,
  }).catch((error) => {
    if (error.toString().includes("Network Error")) {
      // Handle Network Error
      return false;
    } else if (error.toString().includes("401")) {
      // Handle 401 Error
      return "Token Expired";
    } else {
      console.log(error);
      // Handle General Error
    }
    document.body.classList.remove("network-active");
    return error.response();
  });
};


export const getCall = async (url, data, params, headers) => {
  return axios({
    method: "get",
    url: url,
    data: data,
    params: params,
    headers: headers,
    // baseURL: `${process.env.VUE_APP_BASE_URL}`,
  }).catch((error) => {
    if (error.toString().includes("Network Error")) {
      // Handle Network Error
      return false;
    } else if (error.toString().includes("401")) {
      // Handle 401 Error
      return "Token Expired";
    } else {
      console.log(error);
    }
  });
};
