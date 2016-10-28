import DS from 'ember-data';

export default DS.Model.extend({

    author: DS.attr("string"),
    title: DS.attr("string"),
    date: DS.attr("string"),
    content: DS.attr("string"),
    rating: DS.attr([2,3,4,5,]),
    comments: DS.hasMany('comments', {async: true}),

});
