import Ember from 'ember';

export default Ember.Route.extend({
    member: Ember.inject.service(),
    model(){
        return Ember.RSVP.hash({
            questions: this.store.findAll('question'),
        });
    },
    actions: {
        postQuestion(params){
            var member = this.get('member').get('member');
            var newQuestion = this.store.createRecord('question', params);
             newQuestion.save().then(function(){
                 if(member){
                     member.get('questions').addObject(newQuestion);
                     member.save().then(function(){
                        return newQuestion.set('member', member);
                     });
                 }
             });
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
        },
        signIn(params){
            this.store.query('member', {
                orderBy: 'screenName',
                equalTo: params.screenName
            }). then (function(foundMember){
                if(foundMember.get("length")===0){
                    alert("No screen name found, sorry");
                }
                else if(foundMember.get('firstObject').get('password') !== params.password){
                    alert("Your password did not match the screen name you provided");
                }
                else {
                    alert("You have been successfully logged in");
                    params.member.signIn(foundMember.get('firstObject'));
                }
            }, function(error){
                console.log(error);
            }); //end then
        },
        update(params){
            var member = this.get('member');
            this.get('store').findRecord('member', member.get('id')).then(function(foundMember){
                console.log(foundMember.get('name'));
                console.log(params);
            Object.keys(params).forEach(function(key){
                if(params[key] !== undefined){
                    console.log("if");
                    alert('ran');
                    foundMember.set(key, params[key]);
                }
                else{
                    console.log("else");
                }
            });
            foundMember.save();
        });
        this.transitionTo('index');
        },
        destroyMember(member){
            member.get('member').destroyRecord();
        },
    },
});
