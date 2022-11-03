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
    document.getElementById("searchDetail").innerHTML="<h1>Từ khóa tìm kiếm</h1> <b>"+ws+"</b>";
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
    "sp001":{ "name":"Sữa Chua Vị Kiwi","price":21000,"photo":"data/images/sanpham/kiwi.jpg"},
    "sp002":{ "name":"Sữa Chua Vị Xoài","price":22000,"photo":"data/images/sanpham/mango.jpg"},
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới","price":23000,"photo":"data/images/sanpham/cantaloupe.jpg"},
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi","price":24000,"photo":"data/images/sanpham/blackberry.jpg"},
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây","price":25000,"photo":"data/images/sanpham/strawberry.jpg"},
    "sp006":{ "name":"Sữa Chua Vị Việt Quất","price":26000,"photo":"data/images/sanpham/blueberry.jpg"},
    "sp007":{ "name":"Sữa Chua Vị Bưởi","price":27000,"photo":"data/images/sanpham/grapes.jpg"},
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh","price":28000,"photo":"data/images/sanpham/green-apple.jpg"},
    "sp009":{ "name":"Sữa Chua Vị Dứa","price":29000,"photo":"data/images/sanpham/pineapple.jpg"}
    };

//Bài 4

function openCart(){
    window.location.href = "donhang.html";
}


function addCart(code){
    var number=parseInt(document.getElementById(code).value);
    var name=itemList[code].name;
    if(number==0)
        return;
    if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number);
    }else{
        var current=parseInt(window.localStorage.getItem(code));
        if(current+number>100){
            window.localStorage.setItem(code,100);
            alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của "+name+" này.");
            return; }
            else
            window.localStorage.setItem(code,current+number); 
        }
        alert("Đã cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng. Số lượng sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");
}

function getDiscountRate(){
    var d=new Date();
    var weekday=d.getDay();
    var totalMins=d.getHours()*60+d.getMinutes();
    if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
        return 0.1;
    return 0;
}
function showCart(){
    var formatter = new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'});
    var container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
    container.innerHTML="";
    var sum=0;
    var totalPreTax=0;
    var discountRate=getDiscountRate();
    var taxRate=0.1;
    var discount=0;
    var tax=0;
    for(var i=0;i<window.localStorage.length;i++){
        if(typeof itemList[localStorage.key(i)] === "undefined") continue; 
        var tr=document.createElement("tr");
        var photoCell=document.createElement("td");
        var nameCell=document.createElement("td");
        var priceCell=document.createElement("td");
        var numberCell=document.createElement("td");
        var sumCell=document.createElement("td");
        var removeCell=document.createElement("td");
        var removeLink=document.createElement("a");
        var item=itemList[localStorage.key(i)];
        var number=localStorage.getItem(localStorage.key(i));
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='"+item.photo+"' class='round-figure' width='100px'/>"; 
        nameCell.innerHTML=item.name;
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="right";
        numberCell.innerHTML=number;
        numberCell.style.textAlign="right";
        sum=number*item.price; 
        sumCell.innerHTML=formatter.format(sum);
        sumCell.style.textAlign="right";
        removeLink.innerHTML="<i class='fa fa-trash icon-pink'></i>";
        removeLink.setAttribute("href","#");
        removeLink.setAttribute("data-code",localStorage.key(i));
        removeLink.onclick=function(){
        removeCart(this.dataset.code);
    };
    removeCell.style.textAlign="center";
    removeCell.appendChild(removeLink);
    tr.appendChild(photoCell);
    tr.appendChild(nameCell);
    tr.appendChild(numberCell);
    tr.appendChild(priceCell); 
    tr.appendChild(sumCell);
    tr.appendChild(removeCell);
    container.appendChild(tr);
    totalPreTax+=sum; }
    var discount=totalPreTax*discountRate;
    var tax=(totalPreTax-discount)*taxRate;
    document.getElementById("bill_pre_tax_total").innerHTML=formatter.format(totalPreTax); 
    document.getElementById("bill_discount").innerHTML=discountRate+" x A = "+formatter.format(discount); 
    document.getElementById("bill_tax").innerHTML=formatter.format(tax); 
    document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax-discount+tax);
}

function removeCart(code){ 
if(typeof window.localStorage[code] !== "undefined"){
    window.localStorage.removeItem(code);
    document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
    showCart();
    } 
}