app.controller("accessCtrl", function($scope,$http) {
    $scope.value = "John Doe1";
    $http.get('json/accessorice.json').then(
        function(response){
            $scope.luggage = response.data.luggage;
            $scope.backpack = response.data.backpack;
            $scope.slipper = response.data.slipper;
            $scope.scarf = response.data.scarf;
            $scope.ornament = response.data.ornament;
        }
    )
});