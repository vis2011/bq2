class Level1{
    constructor(){
    this.backButton = createImg("back arrow.png", "bb");
    this.q1=createImg("japan.png" ,"japan");
    this.opt11=createButton("South Korea");
    this.opt12=createButton("Japan");
    this.opt13=createButton("Sweden");
    this.opt14=createButton("Oman");
    this.timer = createElement("h1");
     this.timeSecond =15;
    }

    
    setElementsStyle() {
    this.backButton.class("bhtp");
    this.q1.class("qimg");
    this.opt11.class("opt1");
    this.opt12.class("opt2");
    this.opt13.class("opt3");
    this.opt14.class("opt4");
    this.timer.class("timer");
  }


  hide(){
    this.backButton.hide();
    this.q1.hide();
    this.opt11.hide();
        this.opt12.hide();
            this.opt13.hide();
                        this.opt14.hide();
                        this.timer.hide();
  }

  display(){

        this.setElementsStyle();

        this.backButton.mousePressed(() =>{
             this.hide();
             ply = new Play();
             ply.display();
                 this.title.hide();
    this.backButton.hide();
    this.q1.hide();
    this.opt11.hide();
        this.opt12.hide();
            this.opt13.hide();
                        this.opt14.hide();
              this.timeSecond = 0;
        })


            var ttext=`Timer :${this.timeSecond}`;
            this.timer.html(ttext)
          const countDown =  setInterval (()=>{
            this.timeSecond--;
            var ttext=`Timer :${this.timeSecond}`;
            this.timer.html(ttext)
            if(this.timeSecond<=0 || this.timeSecond < 1){
            clearInterval(countDown);
            this.timeSecond = 15;
            }
          } , 1000)
}
}