import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['date:desc'],
    sortedQuestions: Ember.computed.sort('questions', "sortBy"),

    actions: {
        destroyQuestion(question){
            this.sendAction("destroyQuestion", question);
        },
        sortChange(){
          let selectedIndex = $('#sortQuestions').val();
            console.log(selectedIndex);
            this.set('sortBy', [selectedIndex]);
          },
    }
});
