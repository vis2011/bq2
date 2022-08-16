class Htp{
    constructor(){
    backButton = createImg("back arrow.png", "bb");;
    this.title = createElement("h1");
        this.text = createElement("h2");
    }

    
    setElementsStyle() {
    this.title.class("tthtp");
    backButton.class("bhtp");
        this.text.class("st")
  }

    hide() {
    this.title.hide();
    backButton.hide();
        this.text.hide();
  }

  display(){
    var text = `How to Play`;
    this.title.html(text);
     var stext = `Click on the options with mouse which is given there . <br> <br>
     <center>Rules :</center><br> <br>
     Once you  given the answer a you can't change the answer<br> <br>
     Once the time is over you can't give the answers<br> <br>
     Once you have exited the game you have to play it from first<br> <br>
     `
    this.text.html(stext);
        this.setElementsStyle();

        backButton.mousePressed(() =>{
             this.hide();
             body.style.background='url("splash.gif")';
             body.style.backgroundSize="190vh";
             play.show();
             how.show();
             about.show();
        })
  }
}