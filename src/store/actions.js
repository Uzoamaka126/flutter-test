import { urls } from "../network/urls";
import { getCall } from "../network/axiosHelpers";

const fetchEvents = async ({ commit }, page) => {
  commit("FETCH_EVENTS_STARTED");
  try {
    const response = await getCall(`${urls.getEvents}?page=${page}&limit=18`);
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

const loadMoreEvents = async ({ commit }, end) => {
  commit("LOAD_MORE_EVENTS_STARTED");
  try {
    const response = await getCall(`${urls.getEvents}?page=2&limit=18`);
    console.log(response);
    if (response.data.data.pageInfo.currentPage === 2) {
      commit("NO_MORE_EVENTS");
      end();
    } else if (response.data.status !== "success") {
      commit("LOAD_MORE_EVENTS_FAILED", {
        errMsg: "Error loading more events",
      });
    }
    commit("LOAD_MORE_EVENTS_SUCCEEDED", response.data.data.events);
    return true;
  } catch (err) {
    commit("LOAD_MORE_EVENTS_FAILED", { errMsg: err });
    return false;
  }
};

const setUserEmail = async ({ commit }, value) => {
  commit("SET_EMAIL", value);
};

const fetchSingleEvent = async ({ commit }, id) => {
  commit("GET_SINGLE_EVENT_STARTED");
  try {
    const response = await getCall(`${urls.getSingleEvent}/${id}`);
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
    const response = await getCall(urls.getTickets, data);
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

const successFunction = () => {
  this.$router.push("/ticket-confirmed");
};

const getOrder = async (context, data) => {
  console.log(successFunction);
  context.commit("GET_ORDER_STARTED");
  try {
    const response = await getCall(urls.getOrder, data);
    if (response.data.status !== "success") {
      context.commit("GET_ORDER_FAILED", {
        errMsg: "An error occured. Please, try again!",
      });
    } else {
      context.commit("GET_ORDER_SUCCEEDED");
      successFunction();
    }
  } catch (err) {
    context.commit("GET_ORDER_FAILED", { errMsg: err });
  }
};

const incrementRegularCount = async ({ commit }) => {
  commit("INCREMENT_REGULAR_COUNT");
};

const incrementVipCount = async ({ commit }) => {
  commit("INCREMENT_VIP_COUNT");
};
const incrementTableCount = async ({ commit }) => {
  commit("INCREMENT_TABLE_COUNT");
};
const decrementRegularCount = async ({ commit }) => {
  commit("DECREMENT_REGULAR_COUNT");
};
const decrementVipCount = async ({ commit }) => {
  commit("DECREMENT_VIP_COUNT");
};
const decrementTableCount = async ({ commit }) => {
  commit("DECREMENT_TABLE_COUNT");
};

const addToCart = async ({ commit }, data) => {
  commit("ADD_TO_CART", data);
};

/*  */

export default {
  fetchEvents,
  loadMoreEvents,
  setUserEmail,
  fetchSingleEvent,
  fetchEventTickets,
  incrementRegularCount,
  incrementVipCount,
  incrementTableCount,
  decrementRegularCount,
  decrementVipCount,
  decrementTableCount,
  addToCart,
  getOrder,
  successFunction,
};
