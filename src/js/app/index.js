define(["jquery"], function($) {
    $(".change").on("mousestart", function(e) {
        var offSetX = e.pageX;
    });
    $(".change").on("mousemove", function() {
        var setX = e.pageX - $(this).position().left;
        $("document").on("mouseend", function() {
            var t = setX - offsetX;
            if (t >= $(".hhh").innerWidth() - $(".change").innerWidth()) {
                t = $(".hhh").innerWidth() - $(".change").innerWidth()
            } else if (t <= $(".change").innerWidth()) {
                t = $(".change").innerWidth()
            }
            $(".chang").css({
                left: t
            })
        })
    });

    function changeImg2() {
        var pic, file;
        pic = document.getElementById("preview2");
        file = document.getElementById("f2");
        var ext = file.value.substring(file.value.lastIndexOf(".") + 1)
            .toLowerCase();

        // gif在IE浏览器暂时无法显示  
        if (ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
            alert("图片的格式必须为png或者jpg或者jpeg格式！");
            return;
        }
    }

    function html5Reader1(file) {
        var index = file.files.length
        $('#imgNumber1').val(index)
        for (var i = 0; i < file.files.length; i++) {
            var f = file.files[i];
            var reader = new FileReader();
            reader.readAsDataURL(f);
            reader.onload = function(e) {
                var teet = '<div> <img id="preview1" name="pic"style=" height: 100px; float: left; position: relative;margin: 1px 1px " src=' + this.result + '><div>'
                $('.aaaa1').append(teet)
            }
        }
    }
});