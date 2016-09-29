import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('hotel');
  },
  actions: {
    deleteHotel: function(hotel) {
      hotel.destroyRecord().then(() => {
        this.transitionTo('index');
      });
    }
  }
});
