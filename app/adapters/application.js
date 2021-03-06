import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});
