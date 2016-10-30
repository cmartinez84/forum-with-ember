import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addRating(toRate, rating){
            this.sendAction("addRating", toRate, rating);
        }
    }
});
