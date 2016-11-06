import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return Ember.RSVP.hash({
            members: this.store.findAll('member'),
        });
    }
});
