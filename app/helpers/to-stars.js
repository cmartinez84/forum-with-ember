export default Ember.Helper.helper(function(params) {
  let value = params[0],
      tag = '<i value="orange" id="strange" class="fa fa-star star" aria-hidden="true" data-ember-action="533"}></i>';
      var output = tag;
      var totalStars;
      if (params >= 5){
         totalStars = 5
      }
      else{
        totalStars = params;
      }
      for(var i = 1; i <totalStars; i++ ){
          output += tag;
      }

  return Ember.String.htmlSafe(output)});
