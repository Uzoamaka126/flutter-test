import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const AllEvents = () => import("@/components/Events/AllEvents");
const EventDetails = () => import("@/components/Events/EventDetails");
const Hello = () => import("@/components/HelloWorld");

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/events",
      name: "AllEvents",
      component: AllEvents,
    },
    {
      path: "/no-tickets",
      name: "NoTickets",
      component: Hello,
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
      name: "EventDetails",
      // props: true,
      component: EventDetails,
    },
    { path: "/", redirect: "/events" },
  ],
});
