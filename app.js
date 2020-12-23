new Vue({
  el: "#app",
  data: {
    name: "Kawsar",
    isItTrue: true,
    robot: {
      price: 114,
      lifeTime: "How days you want"
    },
    cars: ["Toyota", "BMW", "Marcidies"],

  },
  methods: {
    // greeting: function() {
    //   return "Hello World";
    // }


    greeting: () => {
      return "Hello ES6"
    }
  }


});
