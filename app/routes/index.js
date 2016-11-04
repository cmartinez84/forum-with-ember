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
                }
            }, function(error){
                console.log(error + "a");
            }); //end then
        }
    }
});
//
// ignIn(params){
//         var _this = this;
//         this.store.query('user', {
//           orderBy:'userName',
//           equalTo: params.userName
//           }).then(function(record){
//             var password = record.get('firstObject').get('password');
//             if(password === params.password){
//               alert("you are logged in");
//               var params2 = {
//                 userName: record.get('firstObject').get('userName'),
//                 email: record.get('firstObject').get('email')
//               };
//               _this.get('user').signIn(params2);
//             }
//             else{
//               alert("you are not logged in");
//             }
//         });
