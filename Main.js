import { ResourceLoader } from "./js/base/ResourceLoader";
// import { Sprite } from "./js/base/Sprite";
import { BackGround } from "./js/runtime/BackGround";
import { Land } from "./js/runtime/Land";
import { DataStore } from "./js/base/DataStore";
import { Director } from "./js/Director";
import { Birds } from "./js/player/Birds";
import { StartButton } from "./js/player/StartButton";
import { Score } from './js/player/Score'
import { APITs } from "./test/APITs";

export class Main {
  constructor(props) {
    console.log('我执行了...');
    this.cv = wx.createCanvas();
    this.ctx = this.cv.getContext('2d');
    this.ctx.fillStyle = '#058';
    // console.log(this.cv.width, this.cv.height);
    this.ctx.fillRect(0, 0, this.cv.width, this.cv.height);
    this.dataStore = DataStore.getInstance();
    this.director = new Director();

    const loader = ResourceLoader.create();
    loader.onLoad(map => this.onResourceFirstLoaded(map));

    // Director.getInstance();

    // const img = wx.createImage();
    // img.src = './images/background.png';
    // img.onload = () => this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.cv.width, this.cv.height);
    // img.onload = () => new Sprite(this.ctx, img, 0, 0, img.width, img.height, 0, 0, this.cv.width, this.cv.height).draw()
    // img.onload = () => new BackGround(this.ctx, img).draw();
  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.dataStore.canvas = this.cv;
    // const background = new BackGround(this.ctx, map.get('background'));
    // background.draw();
    this.createBackgroundMusic();

    const apiTs = new APITs();
    // apiTs.getUserInfo();
    // apiTs.login();
    // apiTs.getSettings()
    // apiTs.httpTs();
    // apiTs.socketTs();
    apiTs.downLoad();

    this.init(); 
  }

  init() {
    this.director.isGameOver = false; 
    this.dataStore
      .put('background', BackGround)
      .put('land', Land)
      .put('pencils', [])
      .put('birds', Birds)
      .put('score', Score)
      .put('startButton', StartButton);
    this.registerEvent();
    this.director.createPencil();
    this.director.run();
  }

  registerEvent() {
    wx.onTouchStart(ev => {
      if (this.director.isGameOver) {
        this.init();
      } else {
        this.director.birdsEvent();
      }
    })
  }

  createBackgroundMusic() {
    const bgm = wx.createInnerAudioContext()
    bgm.autoplay = true;
    bgm.loop = true;
    bgm.src = 'audio/bgm.mp3';
  }
  
} 