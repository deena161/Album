const imageInput = document.getElementById('input-image1');
const imageInput2 = document.getElementById('input-image2');
const imageDisplay = document.getElementById('img1');
const imageDisplay2 = document.getElementById('img2');

imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imageDisplay.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});


imageInput2.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imageDisplay2.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

function call() {
    imageDisplay.style.display = 'block';
    imageDisplay2.style.display = 'block';

    var text = document.getElementById("input-text").value;
    document.getElementById("text1").innerHTML = text;

}

function create1() {
    document.getElementById("front").style.backgroundImage = "url('images/viro.jpg')";
    document.getElementById("back").style.backgroundImage = "url('images/viro.jpg')";
    imageDisplay.style.height = '56%';
    imageDisplay.style.width = '55%';
    imageDisplay2.style.height = '56%';
    imageDisplay2.style.width = '55%';
    call();
}
function create2() {
    document.getElementById("front").style.backgroundImage = "url('images/spiral2.jpg')";
    document.getElementById("back").style.backgroundImage = "url('images/spiral2-back.jpg')";
    imageDisplay.style.height = '60%';
    imageDisplay.style.width = '55%';
    imageDisplay2.style.height = '60%';
    imageDisplay2.style.width = '55%';
    call();
}



var rotation = 0;
var zoom = 1;
var rotate = 0;
var rm = 0;
var tm = 0;


function left() {
    rotation += 90;
    update1();
}
function right() {
    rotation -= 90;
    update1();
}
function plus() {
    zoom += 0.1;
    update1();
}
function minus() {
    zoom-=0.1
    update1();
}
function mirror() {
    rotate += 180;
    update1();
}
function rmove(){
    rm+=5;
    update1();
}
function lmove(){
    rm-=5;
    update1();
}
function tmove(){
    tm-=5;
    update1();
}
function bmove(){
    tm+=5;
    update1();
}
function update1() {
    imageDisplay.style.transform = `translateX(${rm}px) translateY(${tm}px) rotate(${rotation}deg) scale(${zoom}) rotateY(${rotate}deg)`;
}



var rotation2 = 0;
var zoom2 = 1;
var rotate2 = 0;
var rm2 = 0;
var tm2 = 0;


function left2() {
    rotation2 += 90;
    update2();
}
function right2() {
    rotation2 -= 90;
    update2();
}
function plus2() {
    zoom2 += 0.1;
    update2();
}
function minus2() {
    zoom2 -= 0.1;
    update2();
}
function mirror2() {
    rotate2 += 180;
    update2();
}
function rmove2(){
    rm2+=5;
    update2();
}
function lmove2(){
    rm2-=5;
    update2();
}
function tmove2(){
    tm2-=5;
    update2();
}
function bmove2(){
    tm2+=5;
    update2();
}
function update2() {
    imageDisplay2.style.transform = `translateX(${rm2}px) translateY(${tm2}px) rotate(${rotation2}deg) scale(${zoom2}) rotateY(${rotate2}deg)`;
}




document.getElementById('download-btn').addEventListener('click', function() {
    const displayDiv = document.getElementById('out');

    html2canvas(displayDiv).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'album.png'; 
        link.click(); 
    }).catch(function(error) {
        console.error('Error capturing the display div:', error);
    });
});
