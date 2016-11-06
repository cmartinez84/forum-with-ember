import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question',{path:'/question/:question_id'});
  this.route('members', function() {
    this.route('member', {path: 'member/:member_id'});
  });
  this.route('profile', {path:'/profile/:member_id'});
});

export default Router;
