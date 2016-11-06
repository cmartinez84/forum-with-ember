import Ember from 'ember';

export default Ember.Route.extend({
    member: Ember.inject.service(),

    actions: {
        update(params){
            var member = this.get('member').get('member');
            Object.keys(params).forEach(function(key){
                if(params[key] !== undefined){
                    member.set(key, params[key]);
                }
            });
            member.save();
            this.transitionTo('profile');
        },
        destroyMember(member){
            member.get('member').destroyRecord();
        },
    }
});
