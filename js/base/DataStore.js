export class DataStore {
  constructor() {
    this.map = new Map();
  }

  static getInstance() {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }
  
  put(key, val) {
    if (typeof val === 'function') val = new val();
    this.map.set(key, val);
    return this;
  }

  get(key) {
    return this.map.get(key);
  }

  destory() {
    for (let val of this.map.values()) val = null;
  }
}