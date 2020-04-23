function EnemyBubble(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.toDelete=false;

    this.xdir=5;
   // this.ydir=0;

   this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

    this.disappear=function(){
        this.toDelete=true;
    }

    this.move=function(){
        this.x=this.x+this.xdir;
      //  this.y=this.x+this.ydir;
    }

    this.show = function() {
      noStroke();
      fill(255, 0, 200, 150);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
  }