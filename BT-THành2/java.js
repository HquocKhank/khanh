// Bài 5
function login(){
    var matkhau = document.form5.pass.value;
    var tendangnhap = document.form5.username.value;

    if(tendangnhap==""&& matkhau == ""){
        alert('Thông tin đăng nhập không để trống');
        return;
    }

    var co = confirm('Bạn muốn hiện mật khẩu' );
        if(co=1){
            confirm('mật khẩu:\n' + matkhau);
        }


}
// Bài 3
function sent(){
    var tieude = 'Tiêu đề:';
    var name = 'Họ và tên:';
    var imail = 'Email:';
    var phonenumber = 'Số điện thoại:';
    var phanhoi = 'Thông tin phản hồi:';
    var ten = document.dataform3.ten.value;
    var mail3 = document.dataform3.mail3.value;
    var title = document.dataform3.title.value;
    var phone = document.dataform3.phone.value;
    var contact =document.getElementById('contact-p3').value;

    if(ten == "" || mail3 == "" || title == "" || phone == "" || contact == ""){
        alert("please fill all fields");
        return;
    }

    if(isNaN(phone)){
        alert("must be a number");
        return;
    }

    var dung  = confirm('confirm your information:\n'+ name +" " + ten + "\n"+imail+" "+mail3+"\n" + tieude +" "+title +"\n"+ phonenumber + " " +phone+ "\n"+ phanhoi+" "+contact+"\n"   );
       
        if(dung==1){
            alert("informtion sent");
            return;
        }
}
// Bài 1
function giaiPhuongTrinh() {
    var a = parseFloat(document.getElementById('input-a').value);
    var b = parseFloat(document.getElementById('input-b').value);
    var resultEl = document.getElementById('result');

    if (a === 0) {
        if (b === 0) {
            resultEl.innerHTML = "Phương trình vô số nghiệm";
        } else {
            resultEl.innerHTML = "Phương trình vô nghiệm";
        }
    } else {
        var x = -b / a;
        resultEl.innerHTML = "Nghiệm của phương trình là x = " + x;
    }
}