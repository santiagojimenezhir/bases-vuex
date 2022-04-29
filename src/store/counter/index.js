//Ligar centarl de este modulo de counters
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
    namespaced: true, //store encapsulado
    state,
    mutations,
    actions,
    getters,
    /**
     * Forma redundante 
     * 
     * state: state,
     * mutations: mutations,
     * actions: actions,
     * etters: getters,
     */
};

export default counterStore;

/**Notas de la clase  */
//falta algo
/**
 * Los estados son como mi data la cual
 * se declaran las variables que ocuparé a lo largo de mi aplicación
 */

/**
                         * Transofrmar el store de una forma reactiva
                         *  state: () => ({
                          count: 1,
                          lastmutation: 0,
                          isLoading: false,
                          lastRandomInt: 0,
                        }),
                         */
//puede ser state : state, esto debido a que es redunante si la propiedad tiene el mismo nombre se puede dejar solo un state
//Store global sencillo  para solo mantener un modulo
// state: {
//     count: 1,
//     lastmutation: 0,
//     isLoading: false,
//     lastRandomInt: 0,
// },
/**
 * Las mutaciones son sincronzas no pueden ser asincronas
 * Las mutaciones cambian el state
 * se debe usar el commit
 */
/**
 * Accion si pueden ser asincronas
 * se dispara mediante un action commit o commit mutation
 * el context es un atributo que funciona para acceder a nuestras mutation y poder llamarlas
 */