var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = {
  __proto__: Bee.prototype,
  constructor: HoneyMakerBee,
  makeHoney: function() {
    this.honeyPot++;
  },
  giveHoney: function() {
    this.honeyPot--;
  }
};
