import { urls } from "../network/urls";
import { getCall } from "../network/axiosHelpers";

const fetchEvents = async ({ commit }) => {
  commit("FETCH_EVENTS_STARTED");
  try {
    const response = await getCall(urls.getEvents);
    console.log(response);
    if (response.data.status !== "success") {
      commit("FETCH_EVENTS_FAILED", {
        fetchEventsErrMsg: "Error loading events",
      });
    }
    // commit("FETCH_EVENTS_SUCCEEDED", { events: response.data.events });
    commit("FETCH_EVENTS_SUCCEEDED", response.data.data.events);
  } catch (err) {
    commit("FETCH_EVENTS_FAILED", { fetchEventsErrMsg: err });
  }
};

export default {
  fetchEvents,
};
