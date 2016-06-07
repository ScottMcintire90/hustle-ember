import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if(param !== "") {
        this.store.query('article', {name: param}).then((result) => {
          this.set('filteredList',result);
        });
      }
      else {
        this.set('filteredList').clear();
      }
    },
    search(param) {
      if(param !== "") {
        this.store.query('article', {name: param}).then((result) => {
          this.set('model',result);
        });
      }
      else {
        this.set('model').clear();
      }
    }
  }
});