export default {
  FETCH_EVENTS_STARTED(state) {
    state.eventsState = "loading";
  },
  FETCH_EVENTS_SUCCEEDED(state, events) {
    state.eventsState = "success";
    state.events = events;
  },
  FETCH_EVENTS_FAILED(state, { fetchEventsErrMsg }) {
    state.eventsState = "failed";
    state.fetchEventsErrMsg = fetchEventsErrMsg;
  },
  LOAD_MORE_EVENTS_STARTED(state) {
    state.loadMoreState = "loading";
  },
  LOAD_MORE_EVENTS_SUCCEEDED(state, events) {
    state.loadMoreState = "success";
    state.events = state.events.concat(events);
  },
  LOAD_MORE_EVENTS_FAILED(state, { errMsg }) {
    state.loadMoreState = "failed";
    state.loadMoreErrMsg = errMsg;
  },
  NO_MORE_EVENTS(state) {
    state.endEventsList = "End of list";
  },
  // SET_EMAIL
  SET_EMAIL(state, value) {
    state.userInfo = { ...state.userInfo, email: value };
  },
};
