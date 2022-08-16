class Atg{
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
    var text = `About the Game`;
    this.title.html(text);
    var stext = `This game has 3 levels - easy to hard <br>
    1 level(EASY level) -  Find the country name using images .The time given is 15 seconds . We have given you 15 questions . Get full points to get into next level <br> <br>
     2 level(MEDIUM level) -  Find the Place name using images .The time given is 10 seconds . We have given you 15 questions . Get 13 points to get into next level  <br> <br>
      3 level(HARD level) -  Find the How many is there in the image us .Example we asked you that find how many crabs are in seashore , You want to answer that . The time given is 5 seconds . We have given you 15 questions . Get 10 points to get Your treasure <br> <br>
      Complete all your levels to get an amazing treasure ....`
    this.text.html(stext)
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