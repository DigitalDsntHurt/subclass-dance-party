describe('dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = makeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have step and setPosition functions', function() {
    expect(dancer.step).to.be.a('function');
    expect(dancer.setPosition).to.be.a('function');
  });

  it('should return an object', function () {
    expect(dancer).to.be.a('object');
  });

  it('should set top and left css values on jQuery\'s $node object', function() {
    expect(dancer.$node.css('top')).to.equal('10px');
    expect(dancer.$node.css('left')).to.equal('20px');
  });
});

// !figure out how to test step()