
function checkKey(){
    var input = document.getElementById("timkiem");
    input.addEventListener("keypress",e =>{
        console.log(e.key);
        e.preventDefault();
        if(e.keyCode == 13){
            doSearch();
        }
    })
    
    
}

function doSearch(){
    var frm = document.forms["frm-search"];
    if(frm.words.value.length >0){
        frm.submit();
    }
}
function showSearch(){
    var url = new URL(window.location);
    var ws = url.searchParams.get("words");
    console.log(ws.value);
    document.getElementById("content").innerHTML =ws;
}

//Bai 2:

function loginValidate(frw){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(frw.email.value)==false){
        alert("Nhap lai email dung dinh dang");
        frw.email.focus();
        return false;
    }
    if(frw.psw.value.length <8){
        alert("Nhap lai mat khau lon hon bang 8 ki tu");
        return false;
    }
    alert("Dang nhap thanh cong");
    return true;
}


function registerValidate(frw){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(frw.email.value)==false){
        alert("Nhap lai email dung dinh dang");
        frw.email.focus();
        return false;
    }
    if(frw.psw.value.length <8){
        alert("Nhap lai mat khau lon hon bang 8 ki tu");
        frw.psw.focus();
        return false;
    }

    // console.log(frw.psw-repeat.value);
    // console.log(frw.pswrepeat.value);
     if(frw.pswrepeat.value === frw.psw.value){
        console.log("Mat khau hop le")
     }
     else{
         alert("Xac nhan mat khau chua dung");
         frw.psw-repeat.focus();
         return false;
    }
    alert("Dang ki thanh cong");
    return true;
}

function checkFormLienHe(frw){
    if(frw.hoten.value.length < 4){
        alert("Ten phai lon hon bang 4 ki tu");
        frw.hoten.focus();
        return false;
    }
    console.log(frw.hoten.length);
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(frw.email.value)==false){
        alert("Nhap lai email dung dinh dang");
        frw.email.focus();
        return false;
    }
    if(frw.text.length>10 && frw.text.length<200 ){
        alert("Noi dung text phai lon hon 10 va be hon 200 ki tu");
        frw.email.focus();
        return false;
    }
    alert("Gui lien he thanh cong")
    return true;

}
//Bai 3
var itemList={
    "sp001":{ "name":"Sữa Chua Vị Kiwi",
        "price":21000,
        "photo":"images/sanpham/kiwi.jpg"},
    "sp002":{ "name":"Sữa Chua Vị Xoài",
        "price":22000,
        "photo":"images/sanpham/mango.jpg"},
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới",
        "price":23000,
        "photo":"images/sanpham/cantaloupe.jpg"},
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi",
        "price":24000,
        "photo":"images/sanpham/blackberry.jpg"},
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây",
        "price":25000,
        "photo":"images/sanpham/strawberry.jpg"},
    "sp006":{ "name":"Sữa Chua Vị Việt Quất",
        "price":26000,
        "photo":"images/sanpham/blueberry.jpg"},
    "sp007":{ "name":"Sữa Chua Vị Bưởi",
        "price":27000,
        "photo":"images/sanpham/grapes.jpg"},
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh",
        "price":28000,
        "photo":"images/sanpham/green-apple.jpg"},
    "sp009":{ "name":"Sữa Chua Vị Dứa",
        "price":29000,
        "photo":"images/sanpham/pineapple.jpg"}
    };

//Bài 4

function clickShoping(){
    window.open("donhang.html")
}