const app = Vue.createApp({
    data() {
     return {
       movies: [
         {name: 'Anne with an E', url: 'https://github.com/apcsdrosco2/WEBPROGSS231-personal-website/blob/30ab3d8af62b083acbcb5431bf4690d083b31b68/home/movies/anne.jpg'},
         {name: 'Derry Girls', url: 'https://github.com/apcsdrosco2/WEBPROGSS231-personal-website/blob/30ab3d8af62b083acbcb5431bf4690d083b31b68/home/movies/derrygirls.jpgg'},
         {name: 'Game of Thrones', url: 'https://github.com/apcsdrosco2/WEBPROGSS231-personal-website/blob/30ab3d8af62b083acbcb5431bf4690d083b31b68/home/movies/got.jpg'},
         {name: 'Hilda Hurricane', url: 'https://github.com/apcsdrosco2/WEBPROGSS231-personal-website/blob/30ab3d8af62b083acbcb5431bf4690d083b31b68/home/movies/hilda.jpg'},
         {name: 'House of the Dragon', url: 'https://github.com/apcsdrosco2/WEBPROGSS231-personal-website/blob/30ab3d8af62b083acbcb5431bf4690d083b31b68/home/movies/hotd.jpg'},
       ]
     }
    }
   })
   
   app.mount('#app')
 