import { DataStore } from "../base/DataStore";

export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx;
    this.scoreNum = 0;
    this.isScore = true;
  }
  
  draw() {
    this.ctx.font = '24px Arial';
    this.ctx.fillStyle = '#058';
    this.ctx.fillText(this.scoreNum, DataStore.getInstance().canvas.width / 2, DataStore.getInstance().canvas.height / 18, 1000);
  }
}
