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
        // console.log(params.question.author);
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
      console.log(question);
      toRate.get("rating").push(rating);
      toRate.save();
    }
});
