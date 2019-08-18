<template>
  <v-app>
    <v-content >
      
      <TextArea/>
      <div class="main-div">
       <Autocomplete class="auto-complete-class" />
       <ul v-if="selectedCities.length">
        <CardComponent @delete-me="deleteItem"
        />
      </ul>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Autocomplete from './components/Autocomplete'
import CardComponent from './components/CardComponent'
import TextArea from './components/TextArea'

export default {
  name: 'App',
  mounted() {
    window.appComponent = this;
    this.$store.watch(
      function (state) {
          return state.cityInfo;
      },
      function (state) {
        
        var data = window.appComponent;
        
        var obj = {};
        var city = data.$store.getters["getCities"].filter(city => city.city == state.city)[0];
        var cityInfo = data.$store.getters["getCityInfo"];
        var measurements = "Values: ";
        cityInfo.measurements.forEach(element => { measurements+= element.parameter.toUpperCase() + ": " + element.value + ", " });
        measurements = measurements.substring(0, measurements.length - 2);

        obj.id = city.count;
        obj.cityName = city.city;
        obj.location = city.location;
        obj.measurements = measurements;
        var currentData = data.$store.getters['getSelectedCities'];
        if(!currentData){
          currentData = [];
        }
        currentData.push(obj);
        data.$store.dispatch('setSelectedCities',currentData);
        data.selectedCities = currentData;
      },
      {
          deep: true
      }
    );
  },
  components: {
    Autocomplete,
    CardComponent,
    TextArea
  },
  data() {
    return {
      selectedCities: []
    };
  },
  methods: {
    deleteItem(id){
      this.selectedCities = this.selectedCities.filter(city => {
        return city.id !== id 
      })
      this.$store.dispatch('setSelectedCities',this.selectedCities);
    }
  },
  async created(){

  }
};
</script> 

<style>

html {
  font-family: "Times New Roman", Times, serif;
  font-size: 16;
}
input {
  font-size: 16;
}

.v-content{
  background-color: #713FAF;
}

#app .v-input__slot{
  background-color: white !important;
}

#app .v-input__append-inner v-input__icon--append{
  visibility: hidden
}
.main-div{
  
     /* min-width: 400px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  margin-top: 50px; */
}

.title-compare{
  font-size: 35px;
  margin-top:50px;
  font-weight: 400;
  color: white;
}

.text-compare{
  font-size:22px;
  margin-bottom: 5px !important;
  color:white;
}

.v-card__title {
  margin-bottom: -22px;
}

.div-compare{
    margin-right: auto;
    margin-left: auto;
  /* margin-right: auto;
  margin-left: auto;
  width:40%;
  min-width: 400px; */
  text-align: center;
  letter-spacing: 0.8px;
  font-weight: 300;
}
</style>