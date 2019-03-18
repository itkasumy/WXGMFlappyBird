import { Sprite } from '../base/Sprite';
import { Director } from '../Director';
import { DataStore } from '../base/DataStore';

export class Pencil extends Sprite {
  constructor(img, top) {
    super(img, 0, 0, img.width, img.height, DataStore.getInstance().canvas.width, 0, img.width, img.height);
    this.top = top;
  }

  draw() {
    this.x -= Director.getInstance().moveSpeed;
    super.draw(this.img, this.srcX, this.srcY, this.srcW, this.srcH, this.x, this.y, this.width, this.height);
  }
}
