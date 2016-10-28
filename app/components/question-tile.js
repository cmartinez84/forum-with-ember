import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        destroyQuestion(question){
            if(confirm("are you sture you want to destroy this question? all comments will be deleted as well")){
                this.sendAction("destroyQuestion", question);
            }
        }
    }
});
