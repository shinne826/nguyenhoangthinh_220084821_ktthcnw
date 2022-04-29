$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    });
    
    
    function kiemtraten(){
        var = 1;
        let maukt = /[A-Z]{1}[a-z]+)((\s{1}[a-z]+){1,})$/;
        if ($("#Name").val() == ""){
            $("#tbName").html("Khong De Trong");
            return false;
        }
        if(!maukt.test($("#Name").val())){
            $("#tbName").html("moi ki tu dau viet hoa khong dung so");
            return true;
        }
        $("tbName").html("*");
        return true;
    }
    $("Name").blur(kiemtraten);

    function kiemtrasoao(){
        var maukt=/^\d*$/;
        if($("#Ao").val()==" "){
            $("#tbAo").html("ko de trong");
            return false;
        }
        if(!maukt.test($("#Ao").val())){
            $("#tbAo").html("dung 1 so tu 1 toi 9");
            return true;
        }else{
            var soao = $("#Ao").val();
            if(soao < 1 || soao > 9){
                $("#tbAo").html("tu 1 den 9");
            }else{
                $("#tbName").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemtrasoao);

    function kiemtracaulacbo(){
        var maukt = /[A-Z]{1}[a-z]+)((\s{1}[a-z]+){1,})$/;
        if($("#clb").val() == ""){
            $("#tbclb").html("khong duoc de trong");
            return false;
        }
        if (!maukt.test($("#clb").val())){
            $("#tbclb").html("Moi Ky Tu Dau Viet Hoa Khong Dung So");
            return true;
        }
        $("tbclb").html("*");
        return true;
    }
    $("#tbclb").blur(kiemtracaulacbo);
    
    function kiemtraNTT(){
        if($("#ntt").val() == ""){
            $("#tbntt").html("Khong duoc de trong");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#ntt").val());
        today = today.setDate(today.getDate()+15);
        if(today>ntt)mn
            $("#tbngaytaptrung").html("Phai sau ngay hien hanh 15 ngay");
            return false;
        }
        $("tbntt").html(*);
        return true;
    }
    $("#ntt").blur(kiemtraNTT)

    function kiemtrasdt(){
        var maukt = /^0\d{3}-\d{3}-\d{3}$/;
        if($("#sdt").val()==""){
            $("#tbsdt").html("khong duoc de trong");
        }
        if(!maukt.test($("#sdt").val())){
            $("#tbsdt").html("Theo dang 0xxx-xxx-xxx trong do x la so tu 0-9");
            return true;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#sdt").html(*);
})