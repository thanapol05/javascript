function appendImg(keyword, index) {
    const imgElem=document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;
    //imgElem.src=`https://source.unsplash.com/400x255/?${keyword}&sig=${index}`;
    //imgElem.src=`https://source.unsplash.com/400*225/?${keyword}&sig=${index}`;

    const galleryElem=document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}
function removePh(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML ='';
}
function searchPhoto(event){
    const keyword = event.target.value;
    if(event.key ==='Enter'&& keyword){
        removePh();
        for(let i =1; i<=9 ; i++){
            appendImg(keyword,i);
        }
    }

}
function run(){
    
    
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown',searchPhoto);
}
run();