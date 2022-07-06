/*

  Bulbs have different wattage
  A 5-watt bulb outputs a brightness between 0 and 5
  A 20-watt bulb oputputs a brightness between 0 and 20

  The Dimmer is a slider between 5 and 15 (numbers written on the device)

  | Dimmer ||  5 Watt | 10 Watt | 20 Watt |
  -----------------------------------------
  |   5    ||    0    |    0    |    0    |
  |   10   ||   2.5   |   5.0   |   10.0  |
  |   15   ||   5.0   |  10.0   |   20.0  |

  Implement Bulb and Dimmer so that you can attach bulbs to the dimmer switch, and adjust the switch to controll all of their brightnesses

*/

class Bulb {
  constructor(watt) {
    this.watt = watt;
    this.light = 0;
  }
}

class Dimmer {
  constructor() {
    this.dim = 0;
    this.bulbs = [];
    //this.light = 0;
  }

  changeSetting(dim) {
    this.dim = dim;
    //let totalLight = 0;

    this.bulbs.forEach((bulb) => {
      //console.log("Next Bulb: ", bulb);
      if (dim <= 5) {
        bulb.light = 0;
      }
      else if (dim >= 15) {
        bulb.light = bulb.watt;
      }
      else {
        //console.log("calculating...");
        bulb.light = ((bulb.watt / 10) * (dim - 5)); // mx+b
      }
      //console.log("light so far: ", bulb.light);
    });
    //this.light = light;
  }

  addBulb(bulb) {
    this.bulbs.push(bulb);
  }
}

const bulb = new Bulb(5);
const dimmer = new Dimmer();
dimmer.addBulb(bulb);
dimmer.changeSetting(10);

console.log(dimmer);
