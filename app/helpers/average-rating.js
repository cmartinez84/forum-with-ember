export default Ember.Helper.helper(function(params) {
  let value = params[0],
      tag = '<i value="orange" id="strange" class="fa fa-star star" aria-hidden="true" data-ember-action="533"}></i>';
      var output = 0;
      var totalStars;
      var length = params[0].length;
      params[0].forEach(function(number){
        output += number;
      });
      output /= length;


  return Ember.String.htmlSafe(output)});
