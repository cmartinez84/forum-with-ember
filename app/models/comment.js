import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr("string"),
    content: DS.attr("string"),
    date: DS.attr("string"),
    avatar: DS.attr("string"),
    question: DS.belongsTo('question', {async: true}),
    rating: DS.attr(),
    member: DS.belongsTo('member', {async: true}),
});
