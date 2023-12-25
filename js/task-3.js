const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername: function (newName) {
    this.username = newName;
  },
  updatePlayTime: function (hours) {
    this.playTime += hours;
  },
  getInfo: function () {
		// USE OLD ES5 CONCATINATION SYNTAX
    // return this.username + " has " + this.playTime + " active hours!";

		// USE NEW ES6 STRING TEMPLATE LITERAL SYNTAX
		return `${this.username} has ${this.playTime} active hours`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
