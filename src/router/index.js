import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/HelloWorld";
import CreateEvent from "@/components/Events/CreateEvent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/no-tickets",
      name: "NoTickets",
      component: Hello,
    },
    {
      path: "/create-event",
      name: "CreateEvent",
      component: CreateEvent,
    },
  ],
});
