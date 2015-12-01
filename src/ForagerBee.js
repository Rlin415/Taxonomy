var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = {
  __proto__: Bee.prototype,
  constructor: ForagerBee,
  forage: function () {
    this.treasureChest.push('treasure');
  }
};
