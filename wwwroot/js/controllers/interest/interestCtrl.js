app.controller('interestCtrl', function ($scope, $http) {
    $http.get('json/interest.json').then(
        function (response) {
            $scope.wow = response.data.wow;
            $scope.hs = response.data.hs;
            $scope.ow = response.data.ow;
            $scope.diablo = response.data.diablo;
            $scope.starCarft = response.data.starCarft;
            $scope.heros = response.data.heros;
        }
    )
});