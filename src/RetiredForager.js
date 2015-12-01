var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = {
  __proto__: ForagerBee.prototype,
  constructor: RetiredForagerBee,
  forage: function() {
    return 'I am too old, let me play cards instead';
  },
  gamble: function() {
    this.treasureChest.push('treasure');
  }
};
