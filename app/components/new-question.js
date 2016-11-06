import Ember from 'ember';

export default Ember.Component.extend({
    member: Ember.inject.service('member'),
    charCount: 0,
    actions: {
        postQuestion() {
            var params = {
                author: this.get('newQuestionAuthor'),
                title: this.get('newQuestionTitle'),
                date: moment().format('LLLL'),
                content: this.get('newQuestionContent'),
                avatar: this.get('newQuestionAvatar'),
                rating: [5],
            };
            if(params['author'] && params['title'] && params['content']){
                this.sendAction("postQuestion", params);
                this.set("newQuestionAuthor", "");
                this.set("newQuestionTitle", "");
                this.set("newQuestionComment", "");
                this.set("newQuestionAvatar", "");
            }
        },
        postQuestionMember() {
            var member = this.get('member').member;
            var params = {
                author: member.get('screenName'),
                title: this.get('newQuestionTitle'),
                date: moment().format('LLLL'),
                content: this.get('newQuestionContent'),
                avatar: member.get('avatar'),
                rating: [5],
            };
            if(params['author'] && params['title'] && params['content']){
                this.sendAction("postQuestion", params);
                this.set("newQuestionAuthor", "");
                this.set("newQuestionTitle", "");
                this.set("newQuestionComment", "");
                this.set("newQuestionAvatar", "");
            }
        },
        charCount(){
            var charCount = (this.get('newQuestionContent')).toString().length;
            var output = "Characters: "
            if(charCount > 500){
                charCount += " too long! Your question must be under 500 characters";
            }
            output += charCount;
            this.set("count", output);
        },
    }
});
