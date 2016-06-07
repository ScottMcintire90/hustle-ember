import Ember from 'ember';

export default Ember.Component.extend({
  updateAdminForm: false,
  
  actions: {
    updateAdminForm() {
      this.set('updateAdminForm', true);
    },

    update(article) {
      var params = {
        name: this.get('name'),
        author: this.get('author'),
        content: this.get('content'),
        date: this.get('date'),
        image: this.get('image')
      };
      this.set('updateAdminForm', false);
      this.sendAction('update', article, params);
    }
  }
});