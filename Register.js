function validateAndSubmit(event) {
    event.preventDefault();

    var username = document.getElementById('usename').value;
    var email = document.getElementById('email').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    var checkbox = document.getElementById('confirmCheckbox').checked;

    if (username === "" || email === "" || pass1 === "" || pass2 === "" || !checkbox) {
        if (!checkbox) {
            alert("Vui lòng đồng ý với các điều khoản và điều kiện trước khi đăng ký");
        } else {
            alert("Vui lòng điền đầy đủ thông tin!");
        }
        return false;    
    }

    if (pass1 !== pass2) {
        alert("Mật khẩu không khớp!");
        return false;
    }

    // Nếu tất cả các điều kiện đều hợp lệ, thực hiện yêu cầu AJAX
    $.ajax({
        type: "POST",
        url: "php/register.php",
        data: {
            name: username,
            email: email,
            pass: pass1,
            confirmPass: pass2
        },
        success: function(response) {
            var data = JSON.parse(response);
            if(data.status === 'success') {
                alert("Đăng ký thành công!");
                window.location.href = './login.html';
            } else {
                alert("Vui lòng nhập thông tin hợp lệ!");
            }
        }
    });

    return false;  // Trả về false để ngăn chặn việc gửi form theo cách thông thường
}

// function validatePasswords() {
//     const password = document.getElementById('pass1').value;
//     const confirmPassword = document.getElementById('pass2').value;

//     if (password === confirmPassword) {
//         // Mật khẩu nhập lại khớp với mật khẩu đã nhập
//         alert('Bạn đã đăng ký thành công!');
//         // Thêm mã xử lý đăng ký ở đây
//     } else {
//         // Mật khẩu nhập lại không khớp
//         alert('Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại.');
//     }
// }

// // Check Register Error
// const form = document.querySelector('form')
// const username = document.getElementById('username')
// const usernameError = document.querySelector("#username-error")
// const email = document.getElementById('email')
// const emailError = document.querySelector("#email-error")
// const password = document.getElementById('pass')
// const passwordError = document.querySelector("#password-error")

// // Show input error message
// function showError(input, message) {
//     const formControl = input.parentElement
//     formControl.className = 'form-control error'
//     const small = formControl.querySelector('small')
//     small.innerText = message
// }

// // Show success outline
// function showSuccess(input) {
//     const formControl = input.parentElement
//     formControl.className = 'form-control success'
//     const small = formControl.querySelector('small')
//     small.innerText = ''
// }

// // Check email is valid
// function checkEmail(email) {
//     const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//     return emailRegex.test(email);
// }

// email.addEventListener("input", function(){
//     if (!checkEmail(email.value)) {
//         emailError.textContent = "*Email is not valid"
//     }else {
//         emailError.textContent = "";
//     }
// })

// // Check length input user name
// username.addEventListener("input", function(){
//     if (username.value.length < 4) {
//         usernameError.textContent = "*Username must be at least 8 characters."
//     }else if(username.value.length > 20){
//         usernameError.textContent = "*Username must be less than 20 characters.";
//     }else {
//         usernameError.textContent = "";
//     }
// })

// // Check length input password
// password.addEventListener("input", function(){
//     if (password.value.length < 8) {
//         passwordError.textContent = "*Password must be at least 8 characters."
//     }else if(password.value.length > 20){
//         passwordError.textContent = "*Password must be less than 20 characters."
//     }else {
//         passwordError.textContent = "";
//     }
// })


// // Check required fields
// function checkRequired(inputArr) {
//     let isRequired = false
//     inputArr.forEach(function(input) {
//         if (input.value.trim() === '') {
//             showError(input, `*${getFieldName(input)} is required`)
//             isRequired = true
//         }else {
//             showSuccess(input)
//         }
//     })

//     return isRequired
// }

// // Get fieldname
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1)
// }

// // Event listeners
// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     if (!checkRequired([username, email, password])) {
//         // checkLength(username, 3, 15)
//         // checkLength(password, 6, 25)
//         // checkEmail(email)
//     } 
// })