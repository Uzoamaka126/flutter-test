const state = {
  events: [],
  event: {
    id: "",
    tickets: [],
  },
  eventsState: "initial",
  fetchEventsErrMsg: null,
  endEventsList: "",
  loadMoreState: "inital",
  loadMoreErrMsg: "",
  userInfo: {
    email: "",
  },
  fetchEventState: "initial",
  getOrderState: "initial",
  fetchEventErrMsg: null,
  fetchTicketsState: "initial",
  ticketsErrMsg: null,
  cart: {
    items: [],
    total: 0,
  },
  createOrderState: "initial",
  createOrderErrMsg: null,
  makePaymentState: "initial",
  link: "",
  makePaymentErrMsg: ""
};

export default state;
