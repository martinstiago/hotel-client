import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hotels');
  this.route('edit', { path: 'hotels/:hotel_id' });
  this.route('accomodation-types');
});

export default Router;
