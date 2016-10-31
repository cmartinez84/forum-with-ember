import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postComment(){
          var params = {
            author: this.get('newCommentAuthor'),
            content: this.get('newCommentContent'),
            avatar: this.get('newCommentAvatar'),
            date: moment().format('LLLL'),
            question: this.get('question'),
            rating: [5],
          };
console.log(params);
          if(params['author'] && params['content']){
              this.sendAction("postComment", params);
              this.set("newCommentAuthor", "");
              this.set("newCommentContent", "");
              this.set("newCommentAvatar", "");
          }
      },
      charCount(){
          var charCount = (this.get('content')).toString().length;
          var output = "Characters: "
          if(charCount > 500){
              charCount += " too long! Your question must be under 500 characters";
          }
          output += charCount;
          this.set("count", output);
      }
    }

});
