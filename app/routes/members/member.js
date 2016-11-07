import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return Ember.RSVP.hash({
            selectedMember: this.store.findRecord('member', params.member_id),
        })
    }
});
