import AdminHome from './components/admin/AdminHome.vue'
import Ca from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'


export const routes = [
    {
        path:'/home',
        component:AdminHome
    },
    {
        path:'/category-list',
        component:Ca
    },
    {
        path:'/add-category',
        component:AddCategory
    }
];
