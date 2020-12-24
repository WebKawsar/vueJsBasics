new Vue({
  el: "#app",
  data: {

    formData: {
      firstName: "",
      lastName: ""
    }

  },
  methods: {

    handleSubmit() {
      
      console.log(this.formData);

    }

  }
 
});
