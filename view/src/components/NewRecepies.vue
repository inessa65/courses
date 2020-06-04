<template>
  <div class="new-recepies">
    <button v-on:click="reloadList">new recepies</button>

    <div v-for="li  in list.meals " :key="li.idMeal">
      <p>Name:{{li.strMeal}}</p>
      <p>How to prepare: {{li.strInstructions}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "new-recepies",
  data() {
    return {
      list: []
    };
  },
  computed: {
    randomRecipie() {
      return this.list[Math.floor(Math.random() * this.list.length)];
    }
  },
  methods: {
    async reloadList() {
      const data = (
        await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      ).data;
      this.list = data;
      console.log(this.list);
    }
  },
  watch: {}
};
</script>

<style>
</style>