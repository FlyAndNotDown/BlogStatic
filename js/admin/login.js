$(document).ready(function () {
    // 登录事件
    $('#login-btn').click(function () {
        $.ajax({
            url: "",    //TODO
            async: true,
            data: "username=" + $('#username').val() + "&password=" + $('#password').val(),
            dataType: 'json',
            success: function(data) {
                //TODO
            }
        });
    });
});