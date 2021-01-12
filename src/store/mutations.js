export default {
  FETCH_EVENTS_STARTED (state) {
    state.eventsState = "loading";
  },
  // FETCH_EVENTS_SUCCEEDED: (state, { events }) => {
  //   state.eventsState = "success";
  //   state.events = events;
  // },
  FETCH_EVENTS_SUCCEEDED (state, events) {
    state.eventsState = "success";
    state.events = events;
  },
  FETCH_EVENTS_FAILED (state, { fetchEventsErrMsg }) {
    state.eventsState = "failed";
    state.fetchEventsErrMsg = fetchEventsErrMsg;
  },
  // };
};
