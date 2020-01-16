import AdminHome from './components/admin/AdminHome.vue'
import Ca from './components/admin/category/List.vue'


export const routes = [
    {
        path:'/home',
        component:AdminHome
    },
    {
        path:'/category-list',
        component:Ca
    }
];
