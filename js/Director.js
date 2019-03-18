import { DataStore } from "./base/DataStore";
import { UpPencil } from "./runtime/UpPencil";
import { DownPencil } from "./runtime/DownPencil";

export class Director {
  constructor(props) {
    console.log('构造器初始化')
    this.dataStore = DataStore.getInstance();
    this.moveSpeed = 2;
  }

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance
  }

  createPencil() {
    const minTop = DataStore.getInstance().canvas.height / 8;
    const maxTop = DataStore.getInstance().canvas.height / 2;
    const top = minTop + Math.random() * (maxTop - minTop);
    this.dataStore.get('pencils').push(new UpPencil(top));
    this.dataStore.get('pencils').push(new DownPencil(top));
  }

  birdsEvent() {
    for (let i = 0; i <= 2; i++) this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
    this.dataStore.get('birds').time = 0;
  }

  check() {
    const birds = this.dataStore.get('birds');
    const land = this.dataStore.get('land');
    const pencils = this.dataStore.get('pencils');

    if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
      this.isGameOver = true;
    }
    const birdsBorder = {
      top: birds.birdsY[0],
      bottom: birds.birdsY[0] + birds.birdsHeight[0],
      left: birds.birdsX[0],
      right: birds.birdsX[0] + birds.birdsWidth[0]
    }
    
    pencils.forEach(pencil => {
      const pencilBorder = {
        top: pencil.y,
        bottom: pencil.y + pencil.height,
        left: pencil.x,
        right: pencil.x + pencil.width
      }
      if (Director.isStrike(birdsBorder, pencilBorder)) this.isGameOver = true;
    })
    const score = this.dataStore.get('score')
    if (birds.birdsX[0] > pencils[0].x + pencils[0].width && score.isScore) {
      score.scoreNum++;
      score.isScore = false;
      wx.vibrateShort({
        success: () => {
          console.log('====================================');
          console.log(`xxx`);
          console.log('====================================');
        },
        fail: () => {},
        complete: () => {}
      })
    }
  }

  static isStrike(bird, pencil) {
    let s = false;
    if (bird.top > pencil.bottom || bird.bottom < pencil.top || bird.left > pencil.right || bird.right < pencil.left) s = true;
    return !s;
  }

  run() {
    this.check();
    if (!this.isGameOver) {
      this.dataStore.get('background').draw();

      const pencils = this.dataStore.get('pencils');
      if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) pencils.shift(), pencils.shift(), this.dataStore.get('score').isScore = true;
      if (pencils[0].x <= (DataStore.getInstance().canvas.width - pencils[0].width) / 2 && pencils.length === 2) this.createPencil();
      this.dataStore.get('pencils').forEach(val => val.draw());

      this.dataStore.get('land').draw();
      this.dataStore.get('birds').draw();
      this.dataStore.get('score').draw();

      wx.setPreferredFramesPerSecond(60);
      const timer = requestAnimationFrame(() => this.run());
      this.dataStore.put('timer', timer);
    } else {
      this.dataStore.get('startButton').draw();
      cancelAnimationFrame(this.dataStore.get('timer'));
      this.dataStore.destory();
      wx.triggerGC();
    }
  }
}
