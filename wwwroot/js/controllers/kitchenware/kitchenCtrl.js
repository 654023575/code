app.controller("kitchenCtrl", function($scope,$http) {
    $scope.value = "John Doe1";
    $http.get('json/kitchenware.json').then(
        function(response){
            $scope.pot = response.data.pot;
            $scope.spatula = response.data.spatula;
            $scope.tableware = response.data.tableware;
            $scope.cup = response.data.cup;
            $scope.clean = response.data.clean;
        }
    )
});