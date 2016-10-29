import Ember from 'ember';

export default Ember.Component.extend({
    charCount: 999,
    actions: {
        postQuestion() {
          console.log(this.get('avatar'));
            var params = {
                author: this.get('author'),
                title: this.get('title'),
                date: moment().format('LLLL'),
                content: this.get('content'),
                avatar: this.get('avatar'),
                rating: [0],
            };
            this.sendAction("postQuestion", params);
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
