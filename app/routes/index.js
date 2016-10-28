import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return Ember.RSVP.hash({
            question: this.store.findAll('question')
        });
    },
    actions: {
        postQuestion(params){
            alert("ere");
            var newQuestion = this.store.createRecord('question', params);
             newQuestion.save();
             this.transitionTo('index');
        }
    }
});
