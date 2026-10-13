// Câu 13: jQuery - click icon "mắt" để hiện / ẩn mật khẩu đã nhập
$(function () {
    $(".password-show").on("click", function () {
        var $icon = $(this);
        var $input = $icon.siblings(".input-control");
        var dangAn = $input.prop("type") === "password";

        // password -> text (hiện nguyên bản) và ngược lại
        $input.prop("type", dangAn ? "text" : "password");
        // Đổi icon: mắt thường <-> mắt gạch chéo
        $icon.toggleClass("fa-eye", !dangAn).toggleClass("fa-eye-slash", dangAn);
    });
});
