import { Pencil } from "./Pencil";
import { Sprite } from "../base/Sprite";

export class UpPencil extends Pencil {
  constructor(top) {
    const img = Sprite.getImage('pieUp');
    super(img, top);
  }
  
  draw() {
    this.y = this.top - this.height;
    super.draw();
  }
} 