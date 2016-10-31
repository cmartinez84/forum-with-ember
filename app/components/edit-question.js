import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        update(question){
            var params = {
              title: this.get('editTitle'),
              author: this.get('editAuthor'),
              content: this.get('editContent'),
              date: this.get('editDate'),
              avatar: this.get('editAvatar')
            };
            console.log(params);
            this.sendAction("update", question, params);
        }
    }
});
