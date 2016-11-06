import Ember from 'ember';

export default Ember.Component.extend({
    member: Ember.inject.service(),
    count: "",
    actions: {
        postComment(){
        console.log(this.get('member').member);
          var params = {
            author: this.get('newCommentAuthor'),
            content: this.get('newCommentContent'),
            avatar: this.get('newCommentAvatar'),
            date: moment().format('LLLL'),
            question: this.get('question'),
            rating: [5],
          };
          if(params['author'] && params['content']){
              this.sendAction("postComment", params);
              this.set("newCommentAuthor", "");
              this.set("newCommentContent", "");
              this.set("newCommentAvatar", "");
          }
      },
      postCommentMember(){
          var member = this.get('member').get('member');
        var params = {
          author: member.get('screenName'),
          avatar: member.get('avatar'),
          content: this.get('newCommentContent'),
          question: this.get('question'),
          date: moment().format('LLLL'),
          rating: [5],
        };
        if(params['author'] && params['content']){
            this.sendAction("postComment", params);
            this.set("newCommentContent", "");
        }
    },
      charCount(){
          var charCount = (this.get('content')).toString().length;
          var output = "Characters: ";
          if(charCount > 500){
              charCount += " too long! Your question must be under 500 characters";
          }
          output += charCount;
          this.set("count", output);
      }
    }

});
