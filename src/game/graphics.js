"use strict";
import * as PIXI from 'pixi.js';

class Graphics {
  constructor() {
    this.PIXIapp = new PIXI.Application({
      backgroundColor: 0xffffff,
      resizeTo: window
    });

    document.body.appendChild(this.PIXIapp.view);
    this.container = new PIXI.Container();
    this.PIXIapp.stage.addChild(this.container);

    this.x = 0
    this.y = 0

    // var documentMouseX = 0
    // var documentMouseY = 0
    // var mouseX = 0
    // var mouseY = 0
    // var canvasMouseMoving = false
    this.SCALE = 20
    // var SIZEx = window.innerWidth
    // var SIZEy = window.innerHeight
    this.SIZE = 600 //(SIZEx + SIZEy)/2
    this.relativeSCALE = this.SIZE / this.SCALE
    // var SCALEChange = 1.2

    this.timeNow = (new Date()).getTime()
    this.timePast = this.timeNow

    this.pixTexturesCompression = 24.5
    this.objTimeToMove = 250 //msec

    localStorage.setItem('mainObjects', '[]')

    this.storageObjects = JSON.parse(localStorage.getItem('mainObjects'))
    this.storageObjPreloaded = this.prepareObjects(this.storageObjects)

    // var mainObj = '0'

    //newdrawObj.x = (SCALE / 2 + storageObj.objX - x) * relativeSCALE
    //newdrawObj.y = (SCALE / 2 - storageObj.objY + y) * relativeSCALE
    this.drawInfos = [];

    for (var obj of this.storageObjPreloaded) {
      this.graphishDrawInfoAdd(obj)
    }

    this.PIXIapp.ticker.add(() => {

      this.timeNow = (new Date()).getTime()
      var deltaTime = this.timeNow - this.timePast
  
      this.update(deltaTime)
  
      this.timePast = this.timeNow
  
  
    });

  }

  graphishDrawInfoUpdate(obj) {

    var drawInfoElement = this.drawInfos.find(function(element) {
      return element.id == obj.objId
    })

    if (drawInfoElement == undefined) {
      this.graphishDrawInfoAdd(this.prepareObject(obj))
      return
    }

    drawInfoElement.xWorldDestinationFrom = drawInfoElement.xWorld
    drawInfoElement.yWorldDestinationFrom = drawInfoElement.yWorld
    drawInfoElement.sizeFrom = drawInfoElement.size

    drawInfoElement.xActualWorld = obj.objX
    drawInfoElement.yActualWorld = obj.objY
    drawInfoElement.sizeWorld = obj.objSize

    drawInfoElement.timeDestination = this.objTimeToMove

  }


  graphishDrawInfoChangeUpdate(obj) {

    var drawInfoElement = this.drawInfos.find(function(element) {
      return element.id == obj.objId
    })

    if (drawInfoElement == undefined) {
      this.graphishDrawInfoAdd(this.prepareObject(obj))
      return
    }

    drawInfoElement.xWorldDestinationFrom = drawInfoElement.xWorld
    drawInfoElement.yWorldDestinationFrom = drawInfoElement.yWorld

    drawInfoElement.xActualWorld += obj.objX
    drawInfoElement.xActualWorld += obj.objY
    drawInfoElement.timeDestination = this.objTimeToMove

  }


  graphishDrawInfoAdd(obj) {

    var newObj = new PIXI.Sprite(obj.pixiTexture)

    newObj.id = obj.objId
    newObj.xActualWorld = 0
    newObj.yActualWorld = 0
    newObj.xWorldDestinationFrom = 0
    newObj.yWorldDestinationFrom = 0
    newObj.timeDestination = 0

    newObj.xWorld = obj.objX
    newObj.yWorld = obj.objY
    newObj.x = 0
    newObj.y = 0

    newObj.sizeWorld = 0
    newObj.sizeFrom = 0
    newObj.size = obj.objSize

    this.container.addChild(newObj)

    this.drawInfos.push(newObj)

  }



  prepareObjects(storageObjects) {

    for (var obj of storageObjects) {
      this.prepareObject(obj)

    }

    return storageObjects
  }

  prepareObject(obj) {
    obj.pixiTexture = new PIXI.Texture.from(obj.objPic)
    return obj
  }



  update(deltaTime) {

    this.drawInfos.forEach((drawInfo) => {

      if (drawInfo.timeDestination > 0) {

        //console.log(deltaTime)

        drawInfo.timeDestination += -deltaTime

        var deltaXDestination = drawInfo.xActualWorld - drawInfo.xWorldDestinationFrom
        var deltaYDestination = drawInfo.yActualWorld - drawInfo.yWorldDestinationFrom
        var destinationProportion = 1 - drawInfo.timeDestination / this.objTimeToMove

        drawInfo.xWorld = drawInfo.xWorldDestinationFrom + deltaXDestination * destinationProportion
        drawInfo.yWorld = drawInfo.yWorldDestinationFrom + deltaYDestination * destinationProportion

        var deltaSize = drawInfo.sizeWorld - drawInfo.sizeFrom
        drawInfo.size = drawInfo.sizeFrom + deltaSize * destinationProportion

      } else {
        drawInfo.timeDestination = 0
      }

      //drawInfo.size = drawInfo.sizeWorld
      var xCordTo = (drawInfo.xWorld - drawInfo.size / 2 - this.x) * this.relativeSCALE
      var yCordTo = (drawInfo.yWorld - drawInfo.size / 2 - this.y) * this.relativeSCALE


      drawInfo.x = xCordTo
      drawInfo.y = yCordTo

      var xScale = 1 / (drawInfo.texture.width / this.pixTexturesCompression) / (this.SCALE / this.pixTexturesCompression) * drawInfo.size
      var yScale = 1 / (drawInfo.texture.height / this.pixTexturesCompression) / (this.SCALE / this.pixTexturesCompression) * drawInfo.size
      drawInfo.scale.set(xScale , yScale )

      //console.log(drawInfo.xDestinationFrom)

    }, this);
  }
}

export {
  Graphics
}