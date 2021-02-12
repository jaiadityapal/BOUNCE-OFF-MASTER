function bounceoffmaster(p,pp){

    if (p.x - pp.x < pp.width/2 + p.width/2
      && pp.x - p.x < pp.width/2 + p.width/2) {
    p.velocityX = p.velocityX * (-1);
    pp.velocityX = pp.velocityX * (-1);
  }
  if (p.y - pp.y < pp.height/2 + p.height/2
    && pp.y - p.y < pp.height/2 + p.height/2){
    p.velocityY = p.velocityY * (-1);
    pp.velocityY = pp.velocityY * (-1);
  }
}