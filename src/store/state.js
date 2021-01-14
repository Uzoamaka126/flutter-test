const state = {
  events: [],
  event: {
    tickets: [],
    counts: {
      regular: 0,
      vip: 0,
      table: 0,
    },
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
    // addedItems: [],
    // cartTotal: 0,
    total: 0,
  },
};

export default state;
