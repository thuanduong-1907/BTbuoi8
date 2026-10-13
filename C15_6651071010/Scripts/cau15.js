// Câu 15: jQuery - hiệu ứng chuyển tab
$(function () {
    var $tabs = $(".tab li");

    function chonTab(idTab) {
        $tabs.removeClass("active");
        $tabs.has("a[href='" + idTab + "']").addClass("active");   // tab được chọn: nền trắng, chữ xanh
        $(".tab-item").stop(true, true).hide();                     // ẩn tất cả nội dung
        $(idTab).fadeIn(300);                                       // hiện nội dung của tab được chọn
    }

    $(".tab li a").on("click", function (e) {
        e.preventDefault();
        chonTab($(this).attr("href"));
    });

    chonTab($(".tab li:first a").attr("href"));   // mặc định mở tab đầu tiên
});
