export default Ember.Helper.helper(function(params) {
  let value = params[0],
      tag = 'https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif';
      if(value){
        tag = value;
      }

  return Ember.String.htmlSafe("<img src="+tag+">")});
