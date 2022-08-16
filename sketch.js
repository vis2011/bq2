
var play;
var how;
var about;
var body = document.querySelector(".body");

var htp,ply , backButton , atg , lvl1;




function setup(){
    createCanvas(windowWidth,windowHeight);

play=createButton("Play")
play.position(100,100)
play.id("bt")
//play.size(150,150)


how=createButton("How to play")
how.position(100,300)
how.id("bt")

about=createButton("About the game")
about.position(100,200)
about.id("bt")



}




function draw(){


    play.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        body.style.background="#A5E1FF";
        ply = new Play();
        ply.display();
    })
        how.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        body.style.background="#A5E1FF"
                htp = new Htp();
        htp.display();
    })
        about.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        body.style.background="#A5E1FF";
        atg = new Atg();
        atg.display();
    })


}

function hide(){
    play.hide();
    how.hide();
    about.hide();
}