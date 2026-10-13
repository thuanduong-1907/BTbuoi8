// Câu 16: jQuery - thêm / xóa hàng trong bảng, có kiểm tra dữ liệu nhập
$(function () {
    // Datepicker (jQuery UI) - nếu không tải được thư viện thì vẫn nhập tay theo dd/mm/yyyy
    if ($.fn.datepicker) {
        $("#datepicker").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            maxDate: 0,
            yearRange: "1900:+0"
        });
    }

    function baoLoi(msg, $truong) {
        $("#thongbao").removeClass("ok").addClass("loi").text(msg);
        if ($truong) $truong.addClass("sai").focus();
    }
    function baoOk(msg) {
        $("#thongbao").removeClass("loi").addClass("ok").text(msg);
    }
    // Trả về "" nếu hợp lệ, ngược lại trả về nội dung lỗi
    function kiemTraNgay(s) {
        var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
        if (!m) return "Birthdate phải có dạng dd/mm/yyyy";
        var d = parseInt(m[1], 10), mo = parseInt(m[2], 10), y = parseInt(m[3], 10);
        var dt = new Date(y, mo - 1, d);
        if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d)
            return "Ngày sinh không tồn tại";
        if (y < 1900 || dt > new Date()) return "Ngày sinh phải từ năm 1900 đến hôm nay";
        return "";
    }
    function kiemTraEmail(s) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    }

    $("form input").on("input", function () { $(this).removeClass("sai"); });
    $("form").on("submit", function (e) { e.preventDefault(); });

    // Add Row
    $(".add-row").on("click", function () {
        var ten = $.trim($("#name").val());
        var email = $.trim($("#email").val());
        var ngay = $.trim($("#datepicker").val());
        $("form input").removeClass("sai");

        if (ten === "") return baoLoi("Vui lòng nhập Name!", $("#name"));
        if (!kiemTraEmail(email)) return baoLoi("Email không đúng định dạng (vd: ten@mail.com)!", $("#email"));
        var loiNgay = kiemTraNgay(ngay);
        if (loiNgay !== "") return baoLoi(loiNgay, $("#datepicker"));

        var $hang = $("<tr></tr>");
        $hang.append($("<td></td>").append('<input type="checkbox" class="chon">'));
        $hang.append($("<td></td>").text(ten));       // .text() để tránh chèn HTML
        $hang.append($("<td></td>").text(email));
        $hang.append($("<td></td>").text(ngay));
        $("table tbody").append($hang);

        $("#name, #email, #datepicker").val("");
        baoOk("Đã thêm một hàng mới.");
    });

    // Delete Row: xóa toàn bộ các hàng đã tích chọn
    $(".delete-row").on("click", function () {
        var $chon = $("table tbody input.chon:checked");
        if ($chon.length === 0) {
            baoLoi("Vui lòng tích chọn hàng cần xóa!");
            return;
        }
        var soHang = $chon.length;
        $chon.closest("tr").remove();
        baoOk("Đã xóa " + soHang + " hàng.");
    });
});
