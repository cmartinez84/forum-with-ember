import Ember from 'ember';

export default Ember.Component.extend({
    member: Ember.inject.service(),

    actions: {
        update(){
            var params = {
                name: this.get('updateName'),
                email: this.get('updateEmail'),
                password: this.get('updatePassword'),
                avatar: this.get('updateAvatar'),
                screenName: this.get('updateScreenName'),
            };
            this.sendAction('update', params);
        },
        destroyMember(member){
            alert("destroy");
            this.sendAction("destroyMember", member );
        }

    }
});
