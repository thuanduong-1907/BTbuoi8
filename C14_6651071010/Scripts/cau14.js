// Câu 14: jQuery - công tắc On/Off đổi theme: On = nền sáng, Off = nền tối
function capNhatTheme() {
    var sang = $("#myonoffswitch").is(":checked");
    var $anh = $("#image-effect-2 img");

    // CSS đã có transition opacity nên chỉ cần đổi class fadeEffect là có hiệu ứng mờ dần
    $anh.removeClass("fadeEffect");
    $anh.filter(sang ? "[src$='on.png']" : "[src$='off.png']").addClass("fadeEffect");

    $("body").toggleClass("theme-light", sang).toggleClass("theme-dark", !sang);
}
$(function () {
    capNhatTheme();                                   // đồng bộ theme với trạng thái ban đầu của công tắc
    $("#myonoffswitch").on("change", capNhatTheme);   // mỗi lần gạt công tắc
});
