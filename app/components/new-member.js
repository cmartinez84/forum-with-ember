import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        signUp(){

            var params = {
                name: this.get('newMemberFirstName')+ " "+this.get('newMemberLastName'),
                screenName: this.get('newMemberScreenName'),
                email: this.get('newMemberEmail'),
                password: this.get('newMemberPassword'),
                avatar: this.get('newMemberAvatar'),
            };
            this.set('newMemberFirstName');
            this.set('newMemberLastName');
            this.set('newMemberScreenName');
            this.set('newMemberEmail');
            this.set('newMemberPassword');
            this.set('newMemberAvatar');

            this.sendAction("signUp", params);
        }
    }
});
