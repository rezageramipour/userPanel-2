var userAge = +prompt("سن خود را وارد کنید: ", 15);
var userGender = prompt("جنسیت خود را وارد کنید: ");
var underAge = 18;
var Man = "man";
var Woman = "woman";
if (isNaN(userAge)) {
    alert("سن وارد شده درست نمی باشد.")

}
if (userGender != Man && userGender != Woman) {
    alert("جنسیت وارد شده درست نمی‌باشد.");
} else {
    if(userGender === Woman || userAge < underAge) {
        alert("شما حق ورود به پنل را ندارید.");
    } else {
        alert("به پنل خوش آمدید.");
    }
}

// if (userGender != Man && userGender != Woman) {
//     alert("جنسیت وارد شده درست نمی‌باشد.");
//     return;
// } 

// if(userGender === Woman || userAge < underAge) {
//         alert("شما حق ورود به پنل را ندارید.");
//     } else {
//         alert("به پنل خوش آمدید.");
// }
