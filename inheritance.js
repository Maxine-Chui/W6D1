
Function.prototype.inherits1 = function(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


Function.prototype.inherits2 = function(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};
