var PrancerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('prancerDancer');
  this.setWidth();
  this.glide();

};

PrancerDancer.prototype = Object.create(Dancer.prototype);
PrancerDancer.prototype.constructor = PrancerDancer;
PrancerDancer.prototype.setWidth = function() {
  let randomWidth = 15 / 100 * $('body').width() * Math.random();
  this.$node.css('width', randomWidth);
};
PrancerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
PrancerDancer.prototype.glide = function() {

};