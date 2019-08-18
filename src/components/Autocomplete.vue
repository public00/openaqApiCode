<template>
     <v-autocomplete style="
     min-width: 400px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  margin-top: 50px;padding-left:30px;"
        @input="selectedCity"
        rounded
        prepend-inner-icon="fa fa-search "
        label="Enter city name..."
        :items="cities"
        :filter="activeFilter"
        filled
      ></v-autocomplete>
</template>
 
<script>
  export default {
    data () {
      return {
        model: null,
        cities: null
       }
    },
    methods:{
      async selectedCity(event){
        if(this.$store.state.selectedCities && this.$store.state.selectedCities.length == 2){
           alert("two items max");
        }
        else{
          await this.$store.dispatch('getCityInfo', event);
        }
      }
    },
    async created(){
      await this.$store.dispatch('InitialGetCities'); 
      var result = await this.$store.getters["getCities"];
      this.cities = result.map(x=>x.location);
      //  this.cities = result.map(({ city, count }) => ({city, count}));
    },
    computed: {
      activeFilter () {
        if (this.model == null) return undefined
        return this.filters[this.model].fn
      },
    },
  }
</script>

<style scoped>

.v-input__append-inner{
  visibility: hidden;
}

#app input{
  background-color: white !important;
}


</style>