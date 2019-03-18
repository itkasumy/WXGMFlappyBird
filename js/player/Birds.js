import { Sprite } from "../base/Sprite";
import { DataStore } from '../base/DataStore';

export class Birds extends Sprite {
  constructor() {
    const img = Sprite.getImage('birds');
    super(img, 0, 0, img.width / 3, img.height, 0, (DataStore.getInstance().canvas.height - img.height) / 2, img.width / 3, img.height);
    this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
    this.clippingY = [10, 10, 10];
    this.clippingWidth = [34, 34, 34];
    this.clippingHeight = [24, 24, 24];
    const birdX = DataStore.getInstance().canvas.width / 4;
    this.birdsX = [birdX, birdX, birdX];
    const birdY = (DataStore.getInstance().canvas.height - 24) / 2;
    this.birdsY = [birdY, birdY, birdY];
    const birdWidth = 34; 
    this.birdsWidth = [birdWidth, birdWidth, birdWidth];
    const birdHeight = 24;
    this.birdsHeight = [birdHeight, birdHeight, birdHeight];
    this.y = [birdY, birdY, birdY];
    this.idx = 0;
    this.count = 0;
    this.time = 0;
  }

  draw() {
    const speed = .2;
    this.count += speed;
    if (this.count >= 2) this.count = 0;
    this.idx = Math.floor(this.count);

    const g = .98 / 2.4;
    const offsetUp = 30;
    const offsetY = g * this.time * (this.time - offsetUp) / 2;
    for (let i = 0; i <= 2; i++) this.birdsY[i] = this.y[i] + offsetY;
    this.time++;

    super.draw(
      this.img,
      this.clippingX[this.idx],
      this.clippingY[this.idx],
      this.clippingWidth[this.idx],
      this.clippingHeight[this.idx],
      this.birdsX[this.idx],
      this.birdsY[this.idx],
      this.birdsWidth[this.idx],
      this.birdsHeight[this.idx]
    );
  }
  
}
  