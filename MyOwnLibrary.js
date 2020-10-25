
function bounceOff(object1, objcect2) {

    if (object1.x - objcect2.x < objcect2.width/2 + object1.width/2
      && objcect2.x - object1.x < objcect2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        objcect2.velocityX = objcect2.velocityX * (-1);
  }
    if (object1.y - objcect2.y < objcect2.height/2 + object1.height/2
      && objcect2.y - object1.y < objcect2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * (-1);
      objcect2.velocityY = objcect2.velocityY * (-1);
  }
  
  }