<template>
  <h1>Counter vuex : {{ $store.state.counter.count }}</h1>
  <h2>Acceso directo : {{ countComputed }}</h2>
  <h5>MapSate Last mutation : {{ lastmutation }}</h5>
  <button @click="increment">+1</button>
  <button @click="incremenetBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>
  <!-- Otra forma de hacerlo la action es desde el evento pero se busca tener más limpieza en el html -->
  <button
    @click="this.$store.dispatch('counter/incrementRandomInt')"
    :disabled="isLoading"
  >
    Random method
  </button>
  <button @click="resetCount" class="reset">Reset</button>
  <!-- Getter direct  -->
  <h6>{{ $store.getters.squareCount }}</h6>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    estaCargando() {
      return this.$store.state.isLoading;
    },
    //Destructuración para llamarlo
    ...mapState("counter", ["count", "lastmutation", "isLoading"]),
    //función flecha, renombrar de diverso forma el state
    // ...mapState({
    //   counter: (state) => state.count,
    //   ultimamutacion: (state) => state.lastMutation,
    // }),
  },
  methods: {
    ...mapMutations("counter", ["resetCount"]),
    ...mapActions("counter", ["incrementRandomInt"]),
    // ...mapActions({
    //   randomInt: "incrementRandomInt", //nombre de mi función en mi archivo de store
    // }),
    increment() {
      this.$store.commit("counter/increment");
    },
    incremenetBy() {
      this.$store.commit("counter/incrementby", 5);
      // this.randomInt();
    },
    incrementRandomInt() {
      this.$store.dispatch("counter/incrementRandomInt");
    },
    // resetCount() {
    //   this.$store.commit("resetCount");
    // },

    /**
     * Primer argumento es el modulo ("counter", {counter,incrmeent ...});
     */
  },
};
</script>

<style scoped>
.reset {
  background: rgb(79, 46, 248);
}
.reset:hover {
  background: rgb(181, 167, 255);
  color: rgb(79, 46, 248);
}
button {
  padding: 15px 25px;
  margin: 2px;
  border-radius: 4px;
  border: 0;
  background: #ffa000;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #ffdb9d;
  transition: 0.5s;
  color: #ffa000;
}
button:active {
  transition: all 0.3s;
  color: #ffdb9d;
  background-color: #ffa000;
}
button:disabled {
  background: #c1c1c1;
  color: rgb(255, 255, 255);
  cursor: not-allowed;
}
</style>
