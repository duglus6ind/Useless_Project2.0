const imageUrls = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/7.jpeg",
    "images/8.jpeg",
    "images/9.jpeg",
    "images/10.jpeg",
    "images/11.jpeg",
    "images/12.jpeg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpeg",
    "images/19.jpeg",
    "images/20.jpeg",
    "images/21.jpeg",
    "images/22.jpeg",
    "images/24.jpeg",

];

function showRandomImage() {
    const imgElement = document.getElementById("randomImage");
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    imgElement.src = imageUrls[randomIndex] + `?t=${new Date().getTime()}`; // cache buster
}
