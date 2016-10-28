import DS from 'ember-data';

export default DS.Model.extend({

    author: DS.attr("string"),
    title: DS.attr("string"),
    date: DS.attr("string"),
    content: DS.attr("string"),
    rating: DS.attr([0]),
    comments: DS.hasMany('comment', {async: true}),

});
