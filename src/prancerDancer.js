var PrancerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('prancerDancer');
};

PrancerDancer.prototype = Object.create(Dancer.prototype);
PrancerDancer.prototype.constructor = PrancerDancer;
// PrancerDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };