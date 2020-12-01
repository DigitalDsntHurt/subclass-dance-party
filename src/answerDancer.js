var AnswerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('answerDancer');
};

AnswerDancer.prototype = Object.create(Dancer.prototype);
AnswerDancer.prototype.constructor = AnswerDancer;
AnswerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};