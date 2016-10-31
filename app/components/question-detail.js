import Ember from 'ember';

export default Ember.Component.extend({
    questionEdit: false,
    actions: {
        addRating(toRate, rating){
            this.sendAction("addRating", toRate, rating);
        },
        destroyQuestion(question){
            if(confirm("Are you sure you want to do this? All comments will be deleted for this question as well")){
                this.sendAction("destroyQuestion", question);
            }
        },
        update(question, params){
            this.sendAction("update", question, params);
            this.set("questionEdit", false);
        },
        showQuestionEdit(){
            this.set("questionEdit", true);
        }
    }
});
