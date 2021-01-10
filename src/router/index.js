import VueRouter from "vue-router";
import Vue from "vue";
import Hello from "@/components/HelloWorld";
import App from "../App";
import EventDetails from "@/components/Events/EventDetails";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },
    {
      path: "/no-tickets",
      name: "NoTickets",
      component: Hello,
    },
    {
      path: "/events/:title",
      name: "EventDetails",
      props: true,
      component: EventDetails,
    },
  ],
});
