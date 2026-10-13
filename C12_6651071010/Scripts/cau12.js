// Câu 12: jQuery - tích "Yes" thì hiện textbox nhập thông tin (Passport / Credit Card)
$(function () {
    // Hai khối dùng chung class nên xử lý theo từng .checkbox-card chứa checkbox được tích
    $(".checkme").on("change", function () {
        var $card = $(this).closest(".checkbox-card");

        if (this.checked) {
            // Chọn "Yes": hiện ô nhập, ẩn liên kết "Apply For ..."
            $card.find(".apply-box").slideUp(150);
            $card.find(".passport-box").slideDown(200).find("input").focus();
        } else {
            // Bỏ chọn: ẩn ô nhập, hiện liên kết "Apply For ..."
            $card.find(".passport-box").slideUp(150);
            $card.find(".apply-box").slideDown(200);
        }
    });
});
