import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        postComment(){
          var params = {
            author: this.get('author'),
            content: this.get('content'),
            date: moment().format('LLLL'),
            question: this.get('question'),
            rating: [5],

          };

          if(params['author'] && params['content']){
              this.sendAction("postComment", params);
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
