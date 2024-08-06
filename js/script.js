//(oop)
// initialize objects
let narto = new character("narto", 10, 100);
let sacoki = new character("sacoki", 5, 100);
//functions
function character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.Elements = new Elements(this.name);
}
function Elements(name) {
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-make-health`);
  this.progress = document.querySelector(`.${name}-health span`);
  this.alive = document.querySelector(`#${name}-alive`);
  this.percentage = document.querySelector(`#${name}-percentage`);
  this.statusBtn = document.querySelector(`#${name}-status-btn`);
  this.statusContainer = document.querySelector(`#${name}-status`);
}
character.prototype.attack = function (opponent) {
  opponent.health -= this.strength;
  opponent.Elements.progress.style.width = `${opponent.health}%`;
  opponent.Elements.percentage.innerText = `${opponent.health}%`;
  opponent.status();

  if (opponent.health == 0) {
    opponent.Elements.attackBtn.style.display = "none";
    opponent.Elements.healthBtn.style.display = "none";
    opponent.Elements.alive.innerText = `${opponent.name} has died`;
  }
};
character.prototype.status = function () {
  this.Elements.statusContainer.innerHTML = `<p>name:${this.name}
  strength:${this.strength}
  health:${this.health}</p>`;
  console.log("oipdj");
};
character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.Elements.progress.style.width = `${this.health}%`;
    this.Elements.percentage.innerText = `${this.health}%`;
    this.status();
  }
  if (this.health > 100) {
    this.health = 100;
    this.Elements.progress.style.width = `${this.health}%`;
    this.Elements.percentage.innerText = `100%`;
    this.status();
  }
};
//events
narto.Elements.attackBtn.addEventListener("click", function () {
  narto.attack(sacoki);
});
sacoki.Elements.attackBtn.addEventListener("click", function () {
  sacoki.attack(narto);
});
sacoki.Elements.healthBtn.addEventListener("click", function () {
  sacoki.makeHealth();
});
narto.Elements.healthBtn.addEventListener("click", function () {
  narto.makeHealth();
});
narto.Elements.statusBtn.addEventListener("click", function () {
  console.log("clicked");
  narto.status();
});
sacoki.Elements.statusBtn.addEventListener("click", function () {
  sacoki.status();
  console.log("clicked");
});

console.log(narto.Elements.statusBtn);
