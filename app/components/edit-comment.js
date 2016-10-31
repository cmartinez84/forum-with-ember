import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        update(question){
            var params = {
              title: this.get('title3'),
              author: this.get('author3'),
              content: this.get('content3'),
              date: this.get('date3'),
              avatar: this.get('avatar3')
            };

            console.log(params);
            this.sendAction("update", question, params);
        }
    }
});
