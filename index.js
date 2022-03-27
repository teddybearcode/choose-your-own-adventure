let lastButtonClicked;
function button1() {
    console.log("button1");

    let scene = document.querySelector('#js-scene');
    scene.innerHTML = "<p>you clicked Button 1</p>";
}
function button2() {
    console.log("button2");

    // let scene = document.querySelector('#js-scene');
    //scene.innerHTML = "<p>you clicked Button 2</p>"


    let answer1 = prompt("how are you?");
    if (answer1 == 'good') {
        let scene = document.querySelector('#js-scene');
        scene.innerHTML = "<p>amazing</p>"
    }

    if (answer1 == 'bad') {
        let scene = document.querySelector('#js-scene');
        scene.innerHTML = "<p>oh no!!!</p>"

    }
}
function button3() {
    console.log("button3");

    let scene = document.querySelector('#js-scene');
    scene.innerHTML = "<p>you clicked Button 3</p>";
}
function button4() {
    console.log("button4");

    let scene = document.querySelector('#js-scene');
    scene.innerHTML = "<p>you clicked Button 4</p>";
}
