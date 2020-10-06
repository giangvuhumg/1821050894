document.addEventListener("DOMContentLoaded",function(){
    $(function() {
        $('nav ul li a').click(function() {
            // Lấy section để hiển thị
            var $section = $('#' + $(this).data('section'));
            // Nếu đang hiện thì không làm gì.
            // Nếu không, ẩn tất cả các se cho hiện (kiểu fade in) phần mong muốn.
            if (!$section.is(':visible')) {
                $('.hideable-section').hide();
                $section.fadeIn();
            }
        });
    });
    $(function(){
        $('.btn-about').click(function(){
            // Lấy section để hiển thị
            var $section = $('#' + $(this).data('section'));
            // Nếu đang hiện thì không làm gì.
            // Nếu không, ẩn tất cả các se cho hiện (kiểu fade in) phần mong muốn.
            if (!$section.is(':visible')) {
                $('.hideable-section').hide();
                $section.fadeIn();
            }
        });
    });

});