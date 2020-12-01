var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.customTop = ourOperation(top);
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
//BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

// BlinkyDancer.prototype.step = function() {
//   debugger;
//   BlinkyDancer.prototype.oldStep();
//   this.$node.toggle();
// };

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.step();
  this.$node.toggle();
};

// var blinky = new BlinkyDancer(10,10,100);
// blinky.oldStep.call(null);
//blinky.step()

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };



// //
// var Animal = function() {
//   this.age = 10;
// };

// Animal.prototype.speak = function () { return 'hiiiiiii!'; };

// var Cat = function () {
//   Animal.call(this);
// };
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// Cat.prototype.aging = function() {
//   this.age ++;
//   console.log(this.age);
// };

