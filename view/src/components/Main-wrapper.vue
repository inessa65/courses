<template>
  <div id="main-wrapper">
    <h1>coffee recipes</h1> 
    
    <Catalog/>
  </div>
</template>

<script>
import Catalog from './Catalog'

export default {
  name: 'Main-wrapper',
 components:{
   Catalog
 }
  
}
</script>
<style >
#main-wrapper{
  width: 960px;
  margin: 0 auto;
}
h1{
  text-align: center;
  font-size: 30px;
}
</style>


