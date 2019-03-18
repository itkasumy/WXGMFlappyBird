import { Sprite } from "../base/Sprite";
import { Director } from "../Director";
import { DataStore } from '../base/DataStore';

export class Land extends Sprite {
  constructor() {
    const img = Sprite.getImage('land');
    super(img, 0, 0, img.width, img.height, 0, DataStore.getInstance().canvas.height - img.height, img.width, img.height);
    this.landX = 0;
    this.landSpeed = Director.getInstance().moveSpeed;
  }

  draw() {
    this.landX += this.landSpeed; 
    if (this.landX > (this.img.width - DataStore.getInstance().canvas.width)) this.landX = 0;
    super.draw(this.img, this.srcX, this.srcY, this.srcW, this.srcH, -this.landX, this.y, this.width, this.height);
  }
}
