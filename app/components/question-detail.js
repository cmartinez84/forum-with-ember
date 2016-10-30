import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addRating(toRate, rating){
            this.sendAction("addRating", toRate, rating);
        },
        destroyQuestion(question){
            if(confirm("Are you sure you want to do this? All comments will be deleted for this question as well")){
                this.sendAction("destroyQuestion", question);
            }
        }
    }
});
