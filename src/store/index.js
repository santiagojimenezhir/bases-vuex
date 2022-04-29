import { createStore } from "vuex";
import counterStore from "./counter";

export default createStore({
    modules: {
        counter: counterStore, //modulo de donde esta
        // product: productStore // Ejemplo de otro modulo con sus respectivos state,mutations,getter,actions
    },
});