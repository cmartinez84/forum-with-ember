import Ember from 'ember';

export default Ember.Component.extend({
    editComment: false,
    actions: {
    destroyComment(comment){
        if(confirm("are you sure you want to delete this comment?")){
            this.sendAction("destroyComment", comment);
        }
    },
    addRating(toRate, rating){
      this.sendAction("addRating", toRate, rating);
    },
    update(comment, params){
      this.sendAction("update", comment, params);
      this.set("editComment", false);
    },
    showCommentEdit(){
      this.set("editComment", true);
    }
}
});
