import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    addRating(question, rating){
      this.sendAction('addRating', question, rating)
    }
  }
});
