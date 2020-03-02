function draw() {
    createCanvas(windowWidth, windowHeight);
    background(100)
    strokeWeight(3);
    stroke("black");
    width = 350;
    height = 500;
    bigRectangle(200,100);
    smallRectangle(200,100);
    twoSquares(200,100);
    pencil(200,100);
    handle(200,100);
    tri(200,100);
    stroke('white');
    fill('pink');
    ellipse(mouseX, mouseY,50,100);
    line(mouseX,150+mouseY,mouseX,50+mouseY);
    stroke('white');
    fill('lightblue');
    ellipse(100+mouseX, 150+mouseY,50,100);
    line(100+mouseX,200+mouseY,100+mouseX,300+mouseY);
    let x = 100 + abs(700*cos(frameCount / 100));
    let y = 150 - abs(100 * sin(frameCount / 100));
    fill('red');
    stroke('gold');
    circle(x, y, 50);

 }
 function tri(x,y){
    fill("pink");
    triangle(x * 3.15,y + 15,x * 3.27,y + 100,x * 3,y + 100);
    fill("black");
    triangle(x * 3.15,y + 15,x * 3.2,y + 50,x * 3.1,y + 50);
 }
 function bigRectangle(x,y){
    rect(x,y,width,height);
 }
 function smallRectangle(x,y){
    rect(x + 50, y + 50, width - 100, height - 100);
 }
 function twoSquares(x,y){
    rect(x + 105, y + 100, width / 2.5, height / 4);
    rect(x + 105, y + 275, width / 2.5, height / 4);
 }
 function pencil(x,y){
    rect(x * 3,y + 100, width / 10, height);
    rect(x * 3.1,y + 100, width / 10, height);
 }
 function handle(x,y){
    fill("grey");
    rect(x + 310,y * 3.3, width / 13, height / 10);
    rect(x + 290,y * 3.5, width / 10, height / 40);
    circle(x + 290,y * 3.55,15)
 }
 
