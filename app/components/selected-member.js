import Ember from 'ember';

export default Ember.Component.extend({

  heading: Ember.computed('member.name', function() {
      var output = [];
      this.get('member').get('comments').then(function(comments){
          comments.forEach(function(comment){
              output = output.concat(comment.get('rating'));
              console.log(output);
            //   console.log(comment.get('rating'))
        });
        //   console.log(comments.get('firstObject').get('rating'));
      });
    })
});
