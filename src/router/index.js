import VueRouter from "vue-router";
import Vue from "vue";
import Hello from "@/components/HelloWorld";
import CreateEvent from "@/components/Events/CreateEvent";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
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
