$(document).ready(function(){

	const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: false, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		anchors: ['main','intro','portfolio1', 'portfolio1-1', 'portfolio2', 'portfolio2-1', 'last'],
		navigationTooltips: ['MAIN', '개요', '뚜레쥬르 개편', '충북경찰청 개편'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				$('.list').removeClass('white')
				$('.list ul li').removeClass('on')
				$('.list ul li').eq(0).addClass('on')
			}else if(destination.index == 1){
				$('.list').removeClass('white')
				$('.list ul li').removeClass('on')
				$('.list ul li').eq(1).addClass('on')
			}else if(destination.index == 2){
				$('.list').removeClass('white')
				$('.list ul li').removeClass('on')
				$('.list ul li').eq(2).addClass('on')
			}else if(destination.index == 3){
				$('.list').addClass('white')
				$('.list ul li').removeClass('on')
				$('.list ul li').eq(2).addClass('on')
			}else if(destination.index == 4){
				$('.list').addClass('white')
				$('.list ul li').removeClass('on')
				$('.list ul li').eq(3).addClass('on')
			}else if(destination.index == 5){
				$('.list').removeClass('white')
				$('.list ul li').removeClass('on')
				$('.list ul li').eq(3).addClass('on')
			}else if(destination.index == 6){
				$('.list').removeClass('white')
				$('.list ul li').removeClass('on')
			}
		},

		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});

	$('.list ul li:nth-child(1)').on('click',function(){
		fullpage_api.moveTo('main', 0)
	})
	$('.list ul li:nth-child(2)').on('click',function(){
		fullpage_api.moveTo('intro', 1)
	})
	$('.list ul li:nth-child(3)').on('click',function(){
		fullpage_api.moveTo('portfolio1', 2)
	})
	$('.list ul li:nth-child(4)').on('click',function(){
		fullpage_api.moveTo('portfolio2', 4)
	})

})//$(document).ready