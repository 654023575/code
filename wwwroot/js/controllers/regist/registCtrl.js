app.controller('registCtrl', function ($scope, $http) {
    $('form').submit(function (ev) {
        ev.preventDefault()
        var data = $(this).serialize()
        console.log(data)
        $.post('/user/register', data, function (res) {
            console.log(res)
            window.location.href = '#/user/login'
        })
    })
});