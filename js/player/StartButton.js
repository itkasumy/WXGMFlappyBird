import { Sprite } from "../base/Sprite";
import { DataStore } from '../base/DataStore';

export class StartButton extends Sprite {
  constructor() {
    const img = Sprite.getImage('startButton');
    super(img, 0, 0, img.width, img.height, (DataStore.getInstance().canvas.width - img.width) / 2, (DataStore.getInstance().canvas.height - img.height) / 2.4, img.width, img.height);
  }
}
