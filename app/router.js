import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hotels', function() {
    this.route('edit', { path: '/:hotel_id' });
  });
  this.route('accomodation-types');
});

export default Router;
