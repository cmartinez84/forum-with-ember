export default Ember.Helper.helper(function(params) {
  let value = params[0],
      tag = '<i class="fa fa-star star" aria-hidden="true"></i>';
      var output = tag;
      for(var i = 1; i <params; i++ ){
          output += tag;
      }

  return Ember.String.htmlSafe(output)});
