const temp = `<p>My name is {{name}}</p>`

const app1 = new Vue({

  data: {
    name: "Kawsar"
  },
  template: temp
})

setTimeout(() => {
  app1.$mount("#app1")
}, 2000)