const sec1 = document.querySelector(".sec1");
const sec1Height = sec1.getBoundingClientRect().height;

$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > sec1Height +20){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })

    
});

//TOP버튼
let moveToTop = function () {
        document.body.scrollIntoView({ behavior: "smooth" });
    };



$(document).ready(function () {

    // 메뉴이동
    $(document).on('click', '.h_li a', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        let o_top = $(href).offset().top;
        $('html, body').animate({
            scrollTop: o_top
        }, 500)
    });



    var sec3Offset = $('#skills').offset().top - $(window).height();
    var sec3Reached = false; // sec3 섹션에 도달했는지 여부를 확인하기 위한 변수

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        // sec3 섹션에 도달하고 아직 실행되지 않았을 때
        if (scrollTop > sec3Offset && !sec3Reached) {
            sec3Reached = true; // 한 번 실행되었음을 표시

            // 각 skill_color 요소에 대해 클래스 추가하여 애니메이션 시작
            $('.skill_color').each(function() {
                var $skillColor = $(this);
                var hClass = $skillColor.attr('class').match(/h_\d+/)[0]; // h_숫자의 클래스 이름 가져오기
                $skillColor.css('animation', hClass + ' 2s forwards'); // 해당 클래스를 추가하여 애니메이션 시작

                var $perElement = $skillColor.closest('.line_box').find('.per');
                var hValue = parseInt(hClass.split('_')[1]); // 클래스 이름에서 숫자 부분만 추출하여 퍼센트 값으로 사용
                animateNumber($perElement, hValue); // 숫자 애니메이션 호출
            });
        }
    });

    // 숫자 애니메이션 함수
    function animateNumber(element, target) {
        $({ countNum: 0 }).animate({ countNum: target }, {
            duration: 1000,
            easing: 'linear',
            step: function() {
                element.text(Math.floor(this.countNum) + '%');
            },
            complete: function() {
                element.text(target + '%');
            }
        });
    }

})