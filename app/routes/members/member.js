import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return Ember.RSVP.hash({
            member: this.store.findRecord('member', params.member_id),
        })
    }
});
