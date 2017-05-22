app.controller('loginCtrl', function ($scope, $http) {
    $('form').submit(function (ev) {
        ev.preventDefault()
        var data = $(this).serialize()
        console.log(data)
        $.post('/user/login', data, function (res) {
            if (res.code == 'error') {
                alert(res.message)
            } else {
                alert(res.message)
                window.location.href = '#/main'
            }
        })
    })
});