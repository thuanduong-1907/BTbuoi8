// Toggle menu mobile: Tailwind không có sẵn hành vi JS như Bootstrap nên cần tự viết
var btn = document.getElementById("menu-btn");
var menu = document.getElementById("mobile-menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");   // đóng <-> mở
    menu.classList.toggle("flex");
});
// Chọn một mục trong menu mobile thì tự đóng menu
menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
    });
});
