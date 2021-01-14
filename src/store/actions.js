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


export default {
  fetchEvents,
  setUserEmail,
  fetchSingleEvent,
  fetchEventTickets,
  getOrder,
};
