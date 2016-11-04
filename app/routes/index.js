import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return Ember.RSVP.hash({
            questions: this.store.findAll('question'),

        });
    },
    actions: {
        postQuestion(params){
            var newQuestion = this.store.createRecord('question', params);
             newQuestion.save();
             this.transitionTo('index');
        },
        destroyQuestion(question){
          var comment_deletions = question.get('comments').map(function(comment){
            return comment.destroyRecord();
          });
          Ember.RSVP.all(comment_deletions).then(function(){
            return question.destroyRecord();
          });
            this.transitionTo('index');
        },
        signUp(params){
            var newMember = this.store.createRecord('member', params);
            newMember.save();
            this.transitionTo('members');
        }
    }
});
