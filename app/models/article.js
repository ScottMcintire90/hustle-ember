import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});
