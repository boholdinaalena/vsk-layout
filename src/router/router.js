import { createWebHistory, createRouter } from "vue-router";

import Products from "../views/Products.vue"
import Statistics from "../views/Statistics.vue"
import PersonalData from "../views/PersonalDate.vue"
import ContactData from "../views/ContactData.vue"
import Pasport from "../views/Pasport.vue"
import PolicyPopup from "../views/PolicyPopup.vue"




const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/personal-data",
    name: "PersonalData",
    component: PersonalData,
  },
  {
    path: "/contact-data",
    name: "ContactData",
    component: ContactData,
  },
  {
    path: "/pasport",
    name: "Pasport",
    component: Pasport,
  },
  {
    path: "/policy-popup",
    name: "PolicyPopup",
    component: PolicyPopup,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;