import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        signUp(){

            var params = {
                name: this.get('newMemberFirstName')+ this.get('newMemberLastName'),
                screenName: this.get('newMemberScreenName'),
                email: this.get('newMemberEmail'),
                password: this.get('newMemberPassword'),
                avatar: this.get('newMemberAvatar'),
            };
            console.log(params);
            this.sendAction("signUp", params);
        }
    }
});
