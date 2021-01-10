import VueRouter from "vue-router";
import Vue from "vue";
import Hello from "@/components/HelloWorld";
import EventDetails from "@/components/Events/EventDetails";
import AllEvents from "@/components/Events/AllEvents";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
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
  ],
});
