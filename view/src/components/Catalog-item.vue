<template>
  <div class="Catalog-item">
    <div class="form">
      <input
        list="<идентификатор>"
        v-model="query"
        @keyup.delete="clearBox"
        placeholder="find coffee"
      />
      <datalist id="<идентификатор>">
        <option v-for="product in list" :key="product.article">{{product.name}}</option>
      </datalist>
      <div class="card" v-for="(item , index) in filteredList" :key="index">
        <h5>{{item.name}}</h5>
        <img :src="require( '../assets/images/'+ item.image)" alt="img" />
        <p>description:{{item.description}}</p>
        <p>Preparing: {{item.prepering}}</p>

      <div>
        <h5>ingredients</h5>
      <p v-for="ingredient in item.ingredients" :key="ingredient.id">Total Kcal:{{ingredient.
        kcal}} <br><span>Fat:{{ingredient.fat}}</span> <br><span>Protein:{{ingredient.protein}} </span></p>
        <p> </p>
          
               
                   
    </div>
      </div>
    </div>
    
    <new-recepies/>
  </div>
</template>

<script>
import NewRecepies from "./NewRecepies";
export default {
  name: "Catalog-item",
  components: {
    NewRecepies
  },
  data() {
    return {
      list: [],
      query: "",
      ingredients: []
    };
  },
  props: {
    data: Array,
  },
  watch: {
    query() {
      this.filteredList();
    }
  },
  methods: {
    clearBox() {
      this.query = "";
    }
  },
  computed: {
    filteredList() {
      if (this.query) {
        return this.list.filter(item => {
          return item.name.includes(this.query);
        });
      }

      return this.list;
    }
  },
  created() {
    this.list = this.data;
  }
};
</script>

<style>
.card {
  display: flex;

  flex-direction: column;
}
.Catalog-item {
  width: 960px;
  margin: 0 auto;
}
img {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
h5 {
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
}
.box-recepies {
  width: 300px;
  border: 1px solid black;
}
</style>