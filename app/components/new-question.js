import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postQuestion() {
          console.log(this.get('avatar'));
            var params = {
                author: this.get('author'),
                title: this.get('title'),
                date: moment().format('LLLL'),
                content: this.get('content'),
                avatar: this.get('avatar'),
                rating: [0],
            };
            this.sendAction("postQuestion", params);
        }
    }
});
