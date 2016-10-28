import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postComment(){
          var params = {
            author: this.get('author'),
            content: this.get('content'),
            date: this.get('date'),
            rating: this.get('rating'),
            question: this.get('question')
          };
          this.sendAction('postComment', params);
        }
    }

});
