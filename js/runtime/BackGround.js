import { Sprite } from "../base/Sprite";
import { DataStore } from '../base/DataStore';

export class BackGround extends Sprite {
  constructor() {
    const img = Sprite.getImage('background');
    super(img, 0, 0, img.width, img.height, 0, 0, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height);
  }
}
