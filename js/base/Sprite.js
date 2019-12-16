import { DataStore } from './DataStore.js';
/**
 * 所有图片的父类，包含所有图片公有的方法和属性
 * @param {Object} img 图片对象
 * @param {number} srcX 图片的起点X；
 * @param {number} srcY 图片的起点Y；
 * @param {number} srcW 图片的宽度；
 * @param {number} srcH 图片的高度；
 * @param {number} x 图片在画布上的起点x；
 * @param {number} y 图片在画布上的起点y；
 * @param {number} width 图片在画布上width；
 * @param {number} height 图片在画布上height；
 */
export class Sprite{
    constructor(img=null,srcX=0,srcY=0,srcW=0,srcH=0,x=0,y=0,width=0,height=0){
        // this.dataStore = DataStore.getInstancec();
        // this.ctx = this.dataStore.ctx;
        this.ctx = DataStore.getInstance().ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    // 画图的方法
    draw(img=this.img,srcX=this.srcX,
    srcY=this.srcY,srcW=this.srcW,
    srcH=this.srcH,x=this.x,y=this.y,  
    width=this.width,height=this.height){
        this.ctx.drawImage(img,srcX,srcY,srcW,srcH,x,y,width,height);
    }
    // 获取图片的方法
    static getImage(key){
        return DataStore.getInstance().imgs.get(key);
    }
} 