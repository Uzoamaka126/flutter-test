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
  GET_ORDER_STARTED(state) {
    state.getOrderState = "loading";
  },
  GET_ORDER_SUCCEEDED(state) {
    state.getOrderState = "success";
  },
  GET_ORDER_FAILED(state, { errMsg }) {
    state.getOrderState = "failed";
    state.ticketsErrMsg = errMsg;
  },
  CREATE_ORDER_STARTED(state) {
    state.createOrderState = "loading";
  },
  CREATE_ORDER_SUCCEEDED(state) {
    state.createOrderState = "success";
  },
  CREATE_ORDER_FAILED(state, { errMsg }) {
    state.createOrderState = "failed";
    state.createOrderErrMsg = errMsg;
  },
  MAKE_PAYMENT_STARTED(state) {
    state.makePaymentState = "loading";
  },
  MAKE_PAYMENT_SUCCEEDED(state, link) {
    state.makePaymentState = "success";
    state.link = link;
  },
  MAKE_PAYMENT_FAILED(state, { errMsg }) {
    state.makePaymentState = "failed";
    state.makePaymentErrMsg = errMsg;
  },
};
