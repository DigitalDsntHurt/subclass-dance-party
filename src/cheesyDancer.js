var CheesyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cheesyDancer');
  this.$node.text('Farnoosh :D');
};

CheesyDancer.prototype = Object.create(Dancer.prototype);
CheesyDancer.prototype.constructor = CheesyDancer;
CheesyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};