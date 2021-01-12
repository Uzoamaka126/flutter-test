import { urls } from "../network/urls";
import { getCall } from "../network/axiosHelpers";

const fetchEvents = async ({ commit }) => {
  commit("FETCH_EVENTS_STARTED");
  try {
    const response = await getCall(`${urls.getEvents}?limit=18`);
    if (response.data.status !== "success") {
      commit("FETCH_EVENTS_FAILED", {
        fetchEventsErrMsg: "Error loading events",
      });
    }
    commit("FETCH_EVENTS_SUCCEEDED", response.data.data.events);
  } catch (err) {
    commit("FETCH_EVENTS_FAILED", { fetchEventsErrMsg: err });
  }
};

const loadMoreEvents = async ({ commit }, end, scrollFn) => {
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
    scrollFn();
  } catch (err) {
    commit("LOAD_MORE_EVENTS_FAILED", { errMsg: err });
  }
};

const setUserEmail = async ({ commit }, value) => {
  commit("SET_EMAIL",  value);
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

export default {
  fetchEvents,
  loadMoreEvents,
  setUserEmail,
  fetchSingleEvent,
};
