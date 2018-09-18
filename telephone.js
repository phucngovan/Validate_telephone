regex=/^[8][4]-[0]{1}[0-9]{9}$/;
function check(num) {
    return regex.test(num);
}


/*regexg=/^[8][4]-[0]{1}[0-9]{10}$/;
function check1(num1) {
    return regexg.test(num1);

}*/
let arr=["84-0986825095","85-0987089855","48-0987567987","84-01656536602","84-2345678912"];
for (let w of arr) {
    if (check(w)) {
        console.log(w + "là 1 số điện thoại hợp lệ");
    }else {
        console.log(w + " không phải là 1 số điện thoại hợp lệ");
    }
}