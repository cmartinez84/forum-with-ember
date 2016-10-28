import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postQuestion() {
            var params = {
                author: this.get('author'),
                title: this.get('title'),
                date: this.get('date'),
                content: this.get('content')
            };
            this.sendAction("postQuestion", params);
        }
    }
});
