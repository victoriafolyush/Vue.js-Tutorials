new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninja',
    website: 'http://iot.lviv.ua/',
    websiteTag: '<a href = "http://iot.lviv.ua/">Another secret place</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
