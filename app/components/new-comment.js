import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postComment(){
          var params = {
            author: this.get('author'),
            content: this.get('content'),
            date: moment().format('LLLL'),
            question: this.get('question'),
          };
          this.sendAction('postComment', params);
        }
    }

});
