import Axios from "axios"

export default {
    state:{
        category:"This is first product category.",
    },
    getters:{
        getCategory(state){
            return state.category
        },
    },
    actions:{
        allCategory(state,payload){
            Axios.get('/category')
            .then((response) => {
                console.log(response.data)
            }).catch((err) => {

            });
        }
    },
    mutations:{
        //
    }
}
