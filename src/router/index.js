import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const AllEvents = () => import("@/components/Events/AllEvents");
const EventDetails = () => import("@/components/Events/EventDetails");
const EventPayment = () => import("@/components/Events/Payments/EventPayment");
const NoTickets = () => import("@/components/Events/NoTickets/NoTickets");
const TicketConfirmation = () =>
  import("@/components/Events/NoTickets/TicketConfirmation");

//

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/events",
      name: "AllEvents",
      component: AllEvents,
    },
    {
      // path: "/events/:title",
      path: "/event",
      name: "EventDetails",
      // props: true,
      component: EventDetails,
    },
    {
      // path: "/events/:title",
      path: "/payment",
      name: "EventPayment",
      // props: true,
      component: EventPayment,
    },
    {
      path: "/no-tickets",
      name: "NoTickets",
      // props: true,
      component: NoTickets,
    },
    {
      path: "/ticket-confirmed",
      name: "TicketConfirmation",
      // props: true,
      component: TicketConfirmation,
    },
    { path: "/", redirect: "/events" },
  ],
});
