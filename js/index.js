var bannerBox = document.querySelector('.banner');
var bannerImgs = document.querySelectorAll('.banner>img');
var bannerBtns = document.querySelectorAll('.banner_btn>span')
var caseBtnLeft = document.querySelector('.case_content>.btn_left');
var caseBtnRight = document.querySelector('.case_content>.btn_right');
var caseList = document.querySelector('.case_list');
//控制banner的显示的
var shown = 0;
// console.log(bannerImg)
console.log(bannerBtns)
// for (let i=0;i<bannerBtns.length;i++){
//     bannerBtns[i].onclick = function (){
//         delBcc();
//         bannerImg.src = 'images/banner'+i+'.png'
//         this.className = 'show'
//         shown = i;
//     }
// }
for (let i=0;i<bannerBtns.length;i++){
    bannerBtns[i].onclick = function (){
        delShow();
        bannerImgs[i].className = 'show';
        this.className = 'show'
        shown = i;
    }
}
//清除显示属性
function delShow(){
    for (var i=0;i<bannerBtns.length;i++){
        bannerBtns[i].className = ''
        bannerImgs[i].className = ''
    }
}
var bannerTime = setBannerTime();

bannerBox.onmousemove = function (){
    clearInterval(bannerTime)
}
bannerBox.onmouseout = function (){
    bannerTime = setBannerTime();
}
function setBannerTime(){
    return setInterval(function (){
    shown++;
    if (shown>=bannerBtns.length){
        shown=0;
    }
    delShow();
    bannerImgs[shown].className = 'show'
    bannerBtns[shown].className = 'show';
},2000)
}
var caseWidth = 1106;
var caseMaxItem = 2
var ml = 0
caseBtnLeft.onclick = function (){
    //点击之后的位置
    ml += caseWidth;
    console.log(ml)
    if (ml > 0){
         ml = 0;
        return false;
    }
caseList.style.marginLeft = ml+'px'
}
caseBtnRight.onclick = function (){
        ml -= 1106;
        console.log( ml)
        if(ml < caseWidth* -caseMaxItem){
            ml = caseWidth* -caseMaxItem
            return false;
        }
        caseList.style.marginLeft = ml+'px'
}