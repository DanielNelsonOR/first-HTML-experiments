let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puppy.jpeg') {
        myImage.setAttribute('src','images/puppy2.jpeg');
    } else {
        myImage.setAttribute('src','images/puppy.jpeg');
    }
}