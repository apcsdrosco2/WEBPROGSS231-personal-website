const app = Vue.createApp({
    data() {
     return {
       movies: [
         {name: 'Anne with an E', url: 'apcsdrosco2/WEBPROGSS231-personal-website/home/movies/anne.jpg'},
         {name: 'Derry Girls', url: 'apcsdrosco2/WEBPROGSS231-personal-website/home/movies/derrygirls.jpg'},
         {name: 'Game of Thrones', url: 'apcsdrosco2/WEBPROGSS231-personal-website/home/movies/got.jpg'},
         {name: 'Hilda Hurricane', url: 'apcsdrosco2/WEBPROGSS231-personal-website/home/movies/hilda.jpg'},
         {name: 'House of the Dragon', url: 'apcsdrosco2/WEBPROGSS231-personal-website/home/movies/hotd.jpg'},
       ]
     }
    }
   })
   
   app.mount('#app')
 