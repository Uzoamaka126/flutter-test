import axios from "axios";

export const postCall = async (url, data, params, headers) => {
//   document.body.classList.add("network-active");
  let finalData = data;
  return axios({
    method: "post",
    url: url,
    data: finalData,
    headers: headers,
    params: params,
    baseURL: `${process.env.REACT_APP_URL}`,
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
    baseURL: `${process.env.REACT_APP_URL}`,
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
