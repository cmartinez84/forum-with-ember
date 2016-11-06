import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    screenName: DS.attr(),
    email: DS.attr(),
    password: DS.attr(),
    avatar: DS.attr(),
    comments: DS.hasMany('comment', {async: true}),
    questions: DS.hasMany('question', {async: true}),
});
