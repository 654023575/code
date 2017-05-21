app.controller("homeCtrl", function($scope,$http) {
    $scope.value = "John Doe1";
    $http.get('json/home.json').then(
        function(response){
            $scope.quilt = response.data.quilt;
            $scope.mattress = response.data.mattress;
            $scope.carpet = response.data.carpet;
            $scope.furniture = response.data.furniture;
            $scope.cushion = response.data.cushion;
            $scope.decoration = response.data.decoration;
        }
    )
});