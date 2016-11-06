import Ember from 'ember';

export default Ember.Route.extend({
    member: Ember.inject.service(),

    model(params){
        return Ember.RSVP.hash({
        questions: this.store.findAll('question'),
        question: this.store.findRecord('question', params.question_id),
        comments: this.store.findAll('comment'),
        });
    },
    actions: {
    postQuestion(params){
        alert("yo");
            var newQuestion = this.store.createRecord('question', params);
             newQuestion.save();
             this.transitionTo('index');
         },
    postComment(params){
        var member = this.get('member').get('member');
       var newComment = this.store.createRecord('comment', params);
       var question = params.question;
        question.get("comments").addObject(newComment);
        newComment.save().then(function(){
            return question.save();
        }).then(function(){
            console.log("then");
            if(member){
                console.log("if");
             member.get('comments').addObject(newComment);
             member.save().then(function(){
                 newComment.set('member', member);
                 return newComment.save();
             });
            }
        })
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
    },
    update(question, params){
        Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    }
    }
});



"Nothing handled the action 'destroyQuestion2'. If you did handle the action, this error can be caused by returning true from an action handler in a controller, causing the action to bubble."
