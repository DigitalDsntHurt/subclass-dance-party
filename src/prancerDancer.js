var PrancerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('prancerDancer');
  this.glide();
};

PrancerDancer.prototype = Object.create(Dancer.prototype);
PrancerDancer.prototype.constructor = PrancerDancer;
PrancerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
PrancerDancer.prototype.glide = function() {
  // this.$node.animate({
  //   opacity: 0.25,
  //   left: '+=50',
  //   height: 'toggle'
  // }, 5000, function() {
  //   // Animation complete.
  // });

  console.log(this);

};