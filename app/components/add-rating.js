import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addRating(question){
      var rating = this.get('rating');
      this.sendAction('addRating', question, rating)
    },
    click(question, rating){
      this.sendAction('addRating', question, rating)
    }
  }
});
