app.controller('foodsCtrl', function ($scope, $http) {
    $http.get('json/foods.json').then(
        function (response) {
            $scope.pastry = response.data.pastry;
            $scope.snack = response.data.snack;
            $scope.dryfruit = response.data.dryfruit;
            $scope.nut = response.data.nut;
            $scope.drink = response.data.drink;
            $scope.tea = response.data.tea;
        }
    )
});