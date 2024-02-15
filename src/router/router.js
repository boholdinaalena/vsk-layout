import { createWebHistory, createRouter } from "vue-router";

import Products from "../views/Products.vue"
import Statistics from "../views/Statistics.vue"
import PersonalDataInsured from "../views/PersonalDataInsured.vue"
import PersonalDataBirth from "../views/PersonalDataBirth.vue"
import PersonalDataPasport from "../views/PersonalDataPasport.vue"
import InsuredList from "../views/InsuredList.vue"
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
    path: "/personal-data-insured",
    name: "PersonalDataInsured",
    component: PersonalDataInsured,
  },
  {
    path: "/personal-data-birth",
    name: "PersonalDataBirth`",
    component: PersonalDataBirth
  },
  {
    path: "/personal-data-pasport",
    name: "PersonalDataPasport",
    component: PersonalDataPasport,
  },
  {
    path: "/insured-list",
    name: "InsuredList",
    component: InsuredList,
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