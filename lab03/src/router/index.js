import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import Menu from "../views/Menu.vue";
import StudentView from "@/views/StudentView.vue";
const routes = [
  {
    path: "/",
    name: "EventListView",
    component: EventListView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/student",
    name: "student",
    component: StudentView,
  },
];
import AboutView from "../views/AboutView.vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
