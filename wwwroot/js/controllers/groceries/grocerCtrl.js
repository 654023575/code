app.controller('grocerCtrl', function ($scope, $http) {
    $http.get('json/groceries.json').then(
        function (response) {
            $scope.stationery = response.data.stationery;
            $scope.incroporated = response.data.incroporated;
            $scope.travel = response.data.travel;
            $scope.foreign = response.data.foreign;
            $scope.outdoor = response.data.outdoor;
            $scope.record = response.data.record;
        }
    )
});