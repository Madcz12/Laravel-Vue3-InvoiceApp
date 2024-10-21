import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import invoiceIndex from "../components/invoices/index.vue";
import NotFoundVue from "../components/NotFound.vue";
import FormNewInvoice from "../components/invoices/New.vue";
import InvoiceShowVue from "../components/invoices/show.vue";
import InvoiceEditVue from "../components/invoices/edit.vue";

const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/invoice/new',
        component: FormNewInvoice
    },
{
        path: '/invoice/show/:id',
        component: InvoiceShowVue,
        props: true
    },
    {
        path: '/invoice/edit/:id',
        component: InvoiceEditVue,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundVue
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
