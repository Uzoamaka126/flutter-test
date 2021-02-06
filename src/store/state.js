const state = {
  events: [],
  event: {
    id: "",
    tickets: [],
  },
  eventsState: "idle",
  fetchEventsErrMsg: null,
  endEventsList: "",
  loadMoreState: "idle",
  loadMoreErrMsg: "",
  userInfo: {
    email: "",
  },
  fetchEventState: "idle",
  getOrderState: "idle",
  fetchEventErrMsg: null,
  fetchTicketsState: "idle",
  ticketsErrMsg: null,
  cart: {
    items: [],
    total: 0,
  },
  createOrderState: "idle",
  createOrderErrMsg: null,
  makePaymentState: "idle",
  link: "",
  makePaymentErrMsg: ""
};

export default state;
