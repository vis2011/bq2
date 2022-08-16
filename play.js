class Play{
    constructor(){
    backButton = createImg("back arrow.png", "bb");
    this.l1=createButton("LEVEL   1");
    this.l2=createButton("LEVEL   2");
    this.l3=createButton("LEVEL   3");
    this.title = createElement("h1");
    }

    
    setElementsStyle() {
    this.title.class("tthtp-1");
    backButton.class("bhtp");
      this.l1.class("l1")
    this.l2.class("l2")
    this.l3.class("l3");
  }


  hide(){
    this.title.hide();
    backButton.hide();
    this.l1.hide();
        this.l2.hide();
            this.l3.hide();
  }


  display(){
    var text = `Play`;
    this.title.html(text);
        this.setElementsStyle();

        backButton.mousePressed(() =>{
             this.hide();
             body.style.background='url("splash.gif")';
             body.style.backgroundSize="190vh";
             play.show();
             how.show();
             about.show();
                 this.title.hide();
    backButton.hide();
    this.l1.hide();
        this.l2.hide();
            this.l3.hide();
        })

        this.l1.mousePressed(() =>{
            this.l1.hide();
            this.l2.hide();
            this.l3.hide();
            this.title.hide();
            backButton.hide();
            Swal.fire({
  title: 'Rules of the game',
  text: " Rules : Once you  given the answer a you can't change the answer . Once the time is over you can't give the answers . Once you have exited the game you have to play it from first",
  icon: 'info',
  showCancelButton: false,
}).then((result) => {
  if (result.isConfirmed) {
            lvl1 = new Level1();
            lvl1.display();
  }
})

        })
        //         this.l2.mousePressed(() =>{
        //     this.l1.hide();
        //     this.l2.hide();
        //     this.l3.hide();
            
        // })
        //         this.l3.mousePressed(() =>{
        //     this.l1.hide();
        //     this.l2.hide();
        //     this.l3.hide();
            
        // })
  }
}