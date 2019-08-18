<template>
  <div class="hello">
   <v-card
      max-width="344"
      class="mx-auto"
    >
      <v-card-title>Ksenija</v-card-title>
      <v-card-text>I'm card text</v-card-text>
      <v-card-actions>
        <v-btn text>Click</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  components:{
  },
  name: 'Index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
