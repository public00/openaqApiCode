import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cities : null,
    cityInfo: null,
    selectedCities: null
  },
  getters : {
    getCities : state => {  
      return state.cities;
    },
    getCityInfo : state => { 
      return state.cityInfo;
    },
    getSelectedCities : state => { 
      return state.selectedCities;
    }
  },
  mutations: {
    setCities : (state,payload) => {
      state.cities = payload;
    },
    selectedCitiesSet : (state,payload) => {
      state.selectedCities = payload;
    },
    setCityInfo : (state,payload) => {
      state.cityInfo = payload;
    }
  },
  actions:{
   InitialGetCities : async (context) => {
    let { data } = await Axios.get('https://api.openaq.org/v1/locations',{params:
    {country: 'GB',limit : 10000},})
    context.commit('setCities',data.results)
   },
   //https://api.openaq.org/v1/measurements
   getCityInfo: async (context, payload) => {
    let { data } = await Axios.get('https://api.openaq.org/v1/latest',{params:
    {country: 'GB',location : payload},})
    // var cities = context.state.selectedCities;
    // var exists = false;
    // if(cities){
    //   cities.forEach(city => {
    //     debugger
    //     if(data.results[0] == city){
    //       exists = true;
    //     }
    //   });
    // }
    // if(exists){
    //   alert('That city is already in list');
    // }else{
      context.commit('setCityInfo',data.results[0])
    // }
   },
   setSelectedCities : async(context, payload)=>{
      context.commit('selectedCitiesSet',payload)
   },
 },
})