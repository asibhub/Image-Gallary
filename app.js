const fullImgBox = document.getElementById('full-Img-Box');
const fullImg = document.getElementById('full-Img');
function openImg(pic) {
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}
function closeImg() {
    fullImgBox.style.display = 'none';
}