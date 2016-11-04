import Ember from 'ember';

export default Ember.Component.extend({
    member: Ember.inject.service(),
    actions: {
        signIn(){
            var params = {
                screenName: this.get('signInScreenName'),
                password: this.get('signInUserPassword'),
                member: this.get('member')

            };
            this.sendAction('signIn', params);
        }
    }
});
