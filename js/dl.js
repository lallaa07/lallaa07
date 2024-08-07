// $(document).ready(function(){
//     $('dl dt').click(function(){
//         $('+dd', this).slideDown(500).siblings('dd').slideUp(500);
//     });
//     $('dl dd').click(function(){
//         $(this).slideUp(500);
//     })
// });

$(function(){
    $('dl dt').on('click', function(){
        $('+dd', this).slideDown(500).siblings('dd').slideUp(500);
    });
    $('dl dd').on('click', function(){
        $(this).slideUp(500)
    })
 });  // $(document).ready(funtion(){});순차적인 프로세스,실행하는 것들의 덩어리
      //click했을 때 click로 인식을 못한다. 동적 객체를 인식을 못한다.그래서 쓰는게 .on(자바스크립트
      // 제이커리에서 사용)동적 객체를 만들어서 화룡할 수 있다. 클릭함수는 동적 객체를 못잡는다.
      //실행은 중가로{}