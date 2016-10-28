import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postQuestion() {
            var params = {
                author: this.get('author'),
                title: this.get('title'),
                date: moment().format('LLLL'),
                content: this.get('content'),
                rating: [0],
            };
            this.sendAction("postQuestion", params);
        }
    }
});
