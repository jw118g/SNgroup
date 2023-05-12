//드롭다운 박스
const dropDown = document.querySelector('.dropdown')
const dropBtn = document.querySelector('.dropbtn')
const dropBtnTxt = document.querySelector('.dropbtn span')
const dropBtnIcon = document.querySelector('.dropbtn img')
const dropListBox = document.querySelector('.dropdown-contents')
const dropList = document.querySelectorAll('.dropdown-content li')

dropDown.addEventListener('click',function(){
    dropListBox.classList.toggle('show')
    dropBtnIcon.classList.toggle('rotate')
    
})
dropList.forEach(function(t,i){
    t.addEventListener('click',function(){
        dropBtnTxt.innerText = t.innerText
    })
})
document.addEventListener("click", function (e) {
    const obj = e.target
    if(obj.closest('.dropdown') === null){
        dropListBox.classList.remove('show')
        dropBtnIcon.classList.remove('rotate')
    }
})


/* 레이어팝업 열기 */
const popupContainer = document.querySelectorAll('.popup-container')
const swiperBtnNext = document.querySelector('.swiper-button-next')
const swiperBtnprev = document.querySelector('.swiper-button-prev')
const pagination = document.querySelector('.swiper-pagination')

function openPopup(obj) {
    document.querySelector('.layerPopup').style.width = '100%';
    const idx = obj.getAttribute('data-key')
    swiper.slideTo(idx, 0, false) 

	for (let container of popupContainer) {
		container.style.opacity = '1';
	}
	pagination.style.opacity = '1';
	swiperBtnNext.style.opacity = '1';
	swiperBtnprev.style.opacity = '1';
}
/* 팝업닫기버튼 */
function closePopup(){
    const closeBtn = document.querySelectorAll('.close-btn')
    for(let i of closeBtn){
        document.querySelector('.layerPopup').style.width = 0;
        for (let container of popupContainer) {container.style.opacity = '0';}
		pagination.style.opacity = '0';
		swiperBtnNext.style.opacity = '0';
		swiperBtnprev.style.opacity = '0';
    }
}

//메인으로 가기 클릭시 화면 상단이동 막기
document.querySelector('div > a').addEventListener('click',function(e){
	e.preventDefault;
})
//새로고침시 화면 상단이동
window.onload = function() {
	setTimeout(function(){
		scrollTo(0,0)
	},200)
}

