import { Resources } from './Resources';

export class ResourceLoader {
  constructor(props) {
    this.map = new Map(Resources);
    // console.log(this.map);
    for (let [key, val] of this.map) {
      // console.log(key, val);
      const img = wx.createImage(val);
      img.src = val;
      this.map.set(key, img);
    }
    // console.log(this.map);
  }
  
  onLoad(callback) {
    let loadedCount = 0;
    for (let value of this.map.values()) {
      value.onload = () => {
        loadedCount++;
        if (loadedCount >= this.map.size) {
          callback(this.map);
        }
      }
    }
  }

  static create() {
    return new ResourceLoader();
  }
}
