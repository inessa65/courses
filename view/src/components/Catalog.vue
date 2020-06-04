<template>
  <div class="Catalog">
    <input
      v-model="query"
      @keyup.enter="addIngr"
      @keyup.delete="clearInput"
      placeholder="write the ingredients"
    />

    <ul>
      <li class="add ing" v-for="(item , index) in post" :key="index">
        {{item}}
        <button @click="remove (index)">x</button>
      </li>
    </ul>
    <Catalog-item :data="products" ></Catalog-item>
  </div>
</template>

<script>
import { ingredients } from "./fl/ingredients";
import { products } from "./fl/some.data";
import CatalogItem from "./Catalog-item";
export default {
  name: "Catalog",

  data() {
    return {
      products: [],
      post: [],
      query: "",
      card: []
    };
  },

  created() {
    this.products = products;
    this.ingredients = ingredients;
  },

  methods: {
    addIngr() {
      this.post.push(this.query);
    },
    clearInput() {
      this.query = "";
    },
    remove(index) {
      this.post.splice(index, 1);
    },
    selectIngr() {}
  },

  components: {
    CatalogItem
  }
};
</script>

<style>
.catalog {
  display: flex;
  flex-direction: column;
}
</style>