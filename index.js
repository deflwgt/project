// READ ME
// document.querySelector là một phương thức được sử dụng để tìm kiếm và chọn phần tử trong cây DOM 
//(Document Object Model) dựa trên các bộ chọn CSS

const addressbtn = document.querySelector('#address-form')
const addresscls = document.querySelector('#address-close')

//thêm sự kiện đóng mở thẻ form bằng flex - none

addressbtn.addEventListener("click" , function(){
    document.querySelector('.address-form').style.display = "flex "
});

addresscls.addEventListener("click" , function(){
    document.querySelector('.address-form').style.display = "none "
});

// slider
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
rightbtn.addEventListener("click",function(){
    index = index + 1
    if(index > imgNumber.length - 1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+ "%"
});
leftbtn.addEventListener("click",function(){
    index = index + 1
    if(index <= 0){
        index = imgNumber.length - 1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+ "%"
});

//slider 1
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumber.forEach(function(image,index){
    
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector('.slider-content-left-top').style.right = index *100+ "%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgActive = document.querySelector('.active')
    imgActive.classList.remove("active")
}

//slider2
function imgAuto(){
    index = index + 1
    if(index > imgNumber.length - 1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index *100+ "%"
    imgNumberLi [index].classList.add("active")
    // console.log(index)
}
setInterval(imgAuto,5000)