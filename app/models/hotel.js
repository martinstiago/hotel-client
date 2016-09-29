import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  star_rating: DS.attr('number'),
  accomodation_type: DS.belongsTo('accomodation-type')
});
