import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return Ember.RSVP.hash({
        question: this.store.findRecord('question', params.question_id),
        comments: this.store.findAll('question')
        });
    },
    actions: {
    postComment(params){
       var newComment = this.store.createRecord('comment', params);
       var question = params.question;
        question.get("comments").addObject(newComment);
        newComment.save().then(function(){
            return question.save();
        });
        this.transitionTo("question");
    },
    destroyComment(comment){
        comment.destroyRecord();
        this.transitionTo("question");
    },
    addRating(toRate, rating){
        toRate.get("rating").push(rating);
        toRate.save();
    },
    destroyQuestion(question){
        question.destroyRecord();
        this.transitionTo('index');
       }
    }
});



"Nothing handled the action 'destroyQuestion2'. If you did handle the action, this error can be caused by returning true from an action handler in a controller, causing the action to bubble."
