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
  //
  SET_EMAIL(state, value) {
    state.userInfo = { ...state.userInfo, email: value };
  },
  GET_SINGLE_EVENT_STARTED(state) {
    state.fetchEventState = "loading";
  },
  GET_SINGLE_EVENT_SUCCEEDED(state, event) {
    state.fetchEventState = "success";
    state.event = { ...state.event, ...event };
  },
  GET_SINGLE_EVENT_FAILED(state, { errMsg }) {
    state.fetchEventState = "failed";
    state.fetchEventErrMsg = errMsg;
  },
  GET_EVENT_TICKETS_STARTED(state) {
    state.fetchTicketsState = "loading";
  },
  GET_EVENT_TICKETS_SUCCEEDED(state, tickets) {
    state.fetchTicketsState = "success";
    state.event = { ...state.event, tickets: tickets };
  },
  GET_EVENT_TICKETS_FAILED(state, { errMsg }) {
    state.fetchTicketsState = "failed";
    state.ticketsErrMsg = errMsg;
  },
  INCREMENT_REGULAR_COUNT(state) {
    state.event = {
      ...state.event,
      counts: { ...state.event.counts, regular: state.event.counts.regular + 1 },
    };
  },
  INCREMENT_VIP_COUNT(state) {
    state.event = {
      ...state.event,
      counts: { ...state.event.counts, vip: state.event.counts.vip + 1 },
    };
  },
  INCREMENT_TABLE_COUNT(state) {
    state.event = {
      ...state.event,
      counts: { ...state.event.counts, table: state.event.counts.table + 1 },
    };
  },
  DECREMENT_REGULAR_COUNT(state) {
    state.event = {
      ...state.event,
      counts: { ...state.event.counts, regular: state.event.counts.regular-- },
    };
  },
  DECREMENT_VIP_COUNT(state) {
    state.event = {
      ...state.event,
      counts: { ...state.event.counts, vip: state.event.counts.vip-- },
    };
  },
  DECREMENT_TABLE_COUNT(state) {
    state.event = {
      ...state.event,
      counts: { ...state.event.counts, table: state.event.counts.table-- },
    };
  },
};
