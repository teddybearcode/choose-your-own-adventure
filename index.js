let lastButtonClicked;
function button1() {
    console.log("button1");

    let scene = document.querySelector('#js-scene');
    scene.innerHTML = "<p>you clicked Button 1</p>";
    lastButtonClicked = "1";
}
function button2() {
   console.log("button2");

   let scene = document.querySelector('#js-scene');
   scene.innerHTML = "<p>you clicked Button 2</p>"
}
function button3(){
    console.log("button3");

    let scene = document.querySelector('#js-scene');
    scene.innerHTML = "<p>you clicked Button 3</p>";
}
function button4(){
    console.log("button4");

    let scene = document.querySelector('#js-scene');
    scene.innerHTML = "<p>you clicked Button 4</p>";
}
