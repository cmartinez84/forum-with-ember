import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr("string"),
    content: DS.attr("string"),
    date: DS.attr("string"),
    rating: DS.attr("string"),
    question: DS.belongsTo('question', {async: true}),
});
