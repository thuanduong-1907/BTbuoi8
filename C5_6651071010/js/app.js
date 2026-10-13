// Khởi tạo ứng dụng Vue 3 và gắn vào <div id="app">
// GHI CHÚ SO SÁNH: nếu dùng Vanilla JS, mỗi lần thêm/xoá giỏ hàng phải tự querySelector + cập nhật
// DOM thủ công (số lượng ở header, danh sách, tổng tiền). Vue tự động làm điều này nhờ reactivity.
Vue.createApp({
    // data(): dữ liệu gốc của ứng dụng. Khi dữ liệu đổi, giao diện tự cập nhật.
    data() {
        return {
            products: [
            { id: 1, ten: "Ốp lưng xanh điện", anh: "../images/sp1.svg", gia: 250000, moTa: "Ốp silicon chống sốc, ôm máy." },
            { id: 2, ten: "Ốp lưng trong suốt", anh: "../images/sp2.svg", gia: 180000, moTa: "Trong suốt, không ố vàng." },
            { id: 3, ten: "Sạc không dây", anh: "../images/sp3.svg", gia: 320000, moTa: "Sạc nhanh 15W, chuẩn Qi." },
            { id: 4, ten: "Tai nghe TWS", anh: "../images/sp4.svg", gia: 490000, moTa: "Bluetooth 5.3, pin 24 giờ." },
            { id: 5, ten: "Cáp sạc Type-C", anh: "../images/sp5.svg", gia: 90000, moTa: "Dài 1m, bện dù bền chắc." },
            { id: 6, ten: "Củ sạc nhanh 20W", anh: "../images/sp6.svg", gia: 210000, moTa: "Sạc nhanh, an toàn." },
            { id: 7, ten: "Pin dự phòng 10000mAh", anh: "../images/sp7.svg", gia: 390000, moTa: "Nhỏ gọn, 2 cổng ra." },
            { id: 8, ten: "Giá đỡ điện thoại", anh: "../images/sp8.svg", gia: 120000, moTa: "Gấp gọn, chỉnh được góc." }
            ],
            cart: [],      // giỏ hàng: mảng các sản phẩm đã thêm
            tuKhoa: ""     // từ khoá tìm kiếm, liên kết 2 chiều với ô input bằng v-model
        };
    },

    // computed: giá trị tính từ data, tự tính lại khi data liên quan thay đổi
    computed: {
        // Số lượng sản phẩm trong giỏ -> hiển thị ở header {{ cartCount }}
        cartCount() {
            return this.cart.length;
        },
        // Tổng tiền = cộng giá tất cả sản phẩm trong giỏ
        tongTien() {
            return this.cart.reduce((tong, sp) => tong + sp.gia, 0);
        },
        // Danh sách sản phẩm đã lọc theo tuKhoa (không phân biệt hoa thường)
        danhSachLoc() {
            const kw = this.tuKhoa.trim().toLowerCase();
            return this.products.filter(sp => sp.ten.toLowerCase().includes(kw));
        }
    },

    methods: {
        // Thêm sản phẩm vào giỏ (gọi bằng @click="themVaoGio(sp)")
        themVaoGio(sanPham) {
            this.cart.push(sanPham);
        },
        // Xoá sản phẩm ở vị trí index khỏi giỏ (gọi bằng @click="xoaKhoiGio(index)")
        xoaKhoiGio(index) {
            this.cart.splice(index, 1);
        },
        // Định dạng giá tiền: 250000 -> "250.000 VND"
        dinhDangGia(so) {
            return so.toLocaleString("vi-VN") + " VND";
        }
    }
}).mount("#app");
