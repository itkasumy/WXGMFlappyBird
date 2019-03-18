import { Pencil } from "./Pencil";
import { Sprite } from "../base/Sprite";
import { DataStore } from '../base/DataStore';

export class  DownPencil extends Pencil {
  constructor(top) {
    const img = Sprite.getImage('pieDown');
    super(img, top);
  }

  draw() {
    const gap = DataStore.getInstance().canvas.height / 5;
    this.y = this.top + gap;
    super.draw();
  }
}
 