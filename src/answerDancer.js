var AnswerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('answerDancer');
  this.$node.text('?');
};


AnswerDancer.prototype = Object.create(Dancer.prototype);
AnswerDancer.prototype.constructor = AnswerDancer;
AnswerDancer.prototype.step = function() {};