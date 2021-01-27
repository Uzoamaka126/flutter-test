import { urls } from "../network/urls";
import { getCall, postCall, postCallFlutter } from "../network/axiosHelpers";

const fetchEvents = async ({ commit }, page) => {
  commit("FETCH_EVENTS_STARTED");
  try {
    const response = await getCall(
      `https://eventsflw.herokuapp.com/v1/events?page=${page}&limit=18`
    );
    if (response.data.status !== "success") {
      commit("FETCH_EVENTS_FAILED", {
        fetchEventsErrMsg: "Error loading events",
      });
      return false;
    }
    commit("FETCH_EVENTS_SUCCEEDED", response.data.data.events);
    return true;
  } catch (err) {
    commit("FETCH_EVENTS_FAILED", { fetchEventsErrMsg: err });
    return false;
  }
};

const loadMoreEvents = async ({ commit }, page) => {
  commit("LOAD_MORE_EVENTS_STARTED");
  try {
    const response = await getCall(
      `https://eventsflw.herokuapp.com/v1/events?page=${page}&limit=18`
    );
    if (response.data.status !== "success") {
      commit("LOAD_MORE_EVENTS_FAILED", {
        fetchEventsErrMsg: "Error loading events",
      });
      return false;
    }
    commit("LOAD_MORE_EVENTS_SUCCEEDED", response.data.data.events);
    return true;
  } catch (err) {
    commit("LOAD_MORE_EVENTS_FAILED", { fetchEventsErrMsg: err });
    return false;
  }
};

const setUserEmail = async ({ commit }, value) => {
  commit("SET_EMAIL", value);
};

const fetchSingleEvent = async ({ commit }, id) => {
  commit("GET_SINGLE_EVENT_STARTED");
  try {
    const response = await getCall(
      `https://eventsflw.herokuapp.com/v1/events/${id}`
    );
    if (response.data.status !== "success") {
      commit("GET_SINGLE_EVENT_FAILED", {
        errMsg: "Error fetching event",
      });
    }
    commit("GET_SINGLE_EVENT_SUCCEEDED", response.data.data);
  } catch (err) {
    commit("GET_SINGLE_EVENT_FAILED", { errMsg: err });
  }
};

const fetchEventTickets = async ({ commit }, data) => {
  commit("GET_EVENT_TICKETS_STARTED");
  try {
    const response = await getCall(
      "https://eventsflw.herokuapp.com/v1/ticket-types/events/1",
      data
    );
    if (response.data.status !== "success") {
      commit("GET_EVENT_TICKETS_FAILED", {
        errMsg: "Error fetching tickets",
      });
    }
    commit("GET_EVENT_TICKETS_SUCCEEDED", response.data.data);
  } catch (err) {
    commit("GET_EVENT_TICKETS_FAILED", { errMsg: err });
  }
};

const getOrder = async ({ commit }, data) => {
  commit("GET_ORDER_STARTED");
  try {
    const response = await getCall(
      "https://eventsflw.herokuapp.com/v1/orders/1",
      data
    );
    if (response.data.status !== "success") {
      commit("GET_ORDER_FAILED", {
        errMsg: "An error occured. Please, try again!",
      });
      return false;
    } else {
      commit("GET_ORDER_SUCCEEDED");
      return true;
    }
  } catch (err) {
    commit("GET_ORDER_FAILED", { errMsg: err });
    return false;
  }
};

const createOrder = async ({ commit }, data) => {
  commit("CREATE_ORDER_STARTED");
  try {
    const response = await postCall(
      "https://eventsflw.herokuapp.com/v1/orders",
      data
    );
    if (response.data.status !== "success") {
      commit("CREATE_ORDER_FAILED", {
        errMsg: "An error occured. Please, try again!",
      });
      return false;
    } else {
      commit("CREATE_ORDER_SUCCEEDED");
      return true;
    }
  } catch (err) {
    commit("CREATE_ORDER_FAILED", { errMsg: err });
    return false;
  }
};

const makeTicketPayment = async ({ commit }, data) => {
  commit("MAKE_PAYMENT_STARTED");
  const headers = {
    Authorization: "Bearer FLWSECK_TEST-dd05895918088b4c2405ec2a84cd9435-X",
  };
  try {
    const response = await postCallFlutter(urls.makePayment, data, headers);
    if (response.data.status !== "success") {
      commit("MAKE_PAYMENT_FAILED", {
        errMsg: "An error occured. Please, try again!",
      });
      return false;
    } else {
      commit("MAKE_PAYMENT_SUCCEEDED", response.data.data.link);
      const link = response.data.data.link;
      return link;
    }
  } catch (err) {
    commit("MAKE_PAYMENT_FAILED", { errMsg: err });
    return false;
  }
};

export default {
  fetchEvents,
  setUserEmail,
  fetchSingleEvent,
  fetchEventTickets,
  getOrder,
  createOrder,
  makeTicketPayment,
  loadMoreEvents,
};
