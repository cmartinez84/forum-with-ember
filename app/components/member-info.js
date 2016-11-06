import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        member: Ember.inject.service(),
        update(){
            var params = {
                name: this.get('updateName'),
                email: this.get('updateEmail'),
                password: this.get('updatePassword'),
                avatar: this.get('updateAvatar'),
                screenName: this.get('updateScreenName'),
            }
            this.sendAction('update', params);
        },
        destroy(member){
            // var memeber  = member.member;
            alert("destroy");
            this.sendAction("destroy", member );
        }

    }
});
