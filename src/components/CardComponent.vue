<template>
<div>
  <div v-for="item in data" v-bind:key="item.id">
    <div class="box-property">
      <v-card max-width="344" style="min-width:347px; width:30%;" max-height="300px" class="mx-auto">   
        
        <v-card-actions class="actions">
            <v-btn class="deleteButton" @click="$emit('delete-me', item.id)" text>x</v-btn>
        </v-card-actions>
      <div style="padding: 20px 10px 0px 40px;">
        <v-card-text style="font-weight:500;font-size:17px;">UPDATED AN HOUR AGO</v-card-text>
        <v-card-title style="padding:14px 0px 7px; font-size: 22px; font-weight:bold;color:#713FAF">{{item.location}}</v-card-title>
        <v-card-text style="font-size:17px;">in {{item.cityName}}, United Kingdom</v-card-text>
        <v-card-text style="font-size:16px;">{{item.date}}</v-card-text>
      </div>
       <p style="font-size:14px;padding: 0px 10px 20px 40px; font-weight: bold">{{item.measurements}}</p> 
      </v-card>
    </div>
  </div>
</div>
</template>

<script> 
  export default {
    data () {
      return {
        model: null,
        data: []
      }
    },
    watch:{
     dataStore () {
        this.data = this.$store.state.selectedCities;
     }
    },
    async created(){
      var items = this.$store.getters['getSelectedCities'];
      this.data  = items;
    },
    methods:{
      deleteItem(id){
        this.$emit('deleteItem', id);
      }
    },
    mounted(){

    },
    computed: {
      dataStore () {
        return this.$store.state.selectedCities;
      }
    },
  }

</script>

<style>
.actions{
    position: absolute;
    left: 285px;
}

.v-card__text{
  margin-bottom: -13px;
  margin-top: 20px;
  padding: 0px
}

.mx-auto{
  /* float: left;
  margin: 30px; */
  border-radius:15px;
}


.delete-button{
  position: absolute;
  right: 5px;
}
/* .box-property{
  margin:10px;
} */

.v-btn__content{
  font-size: 25px;
}

</style>
