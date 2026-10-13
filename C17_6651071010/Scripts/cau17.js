// Câu 17: jQuery - Accordion: mỗi lần chỉ mở được một nội dung
$(function () {
    $("h3").on("click", function () {
        var $box = $(this).next(".box");          // nội dung (div) ngay sau tiêu đề được click

        $(".box").not($box).stop(true, true).slideUp(250);   // đóng tất cả nội dung khác
        $box.stop(true, true).slideToggle(250);              // mở (hoặc đóng lại) nội dung này
    });
});
