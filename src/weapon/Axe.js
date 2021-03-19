var Weapons = require('./Weapons');
class Axe extends Weapons.Weapon {
	constructor() {
		super(1);
		this.setEffect(me => {
			me.weaponCode = 1;
			me.gatherRate = 3;
			me.damage = 30;
			me.xpGain = 9;
			me.weapons[0] = 1;
		});
	}
}
module.exports = Axe;
