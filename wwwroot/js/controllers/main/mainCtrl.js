app.controller('mainCtrl', function ($scope, $http) {
    $http.get('json/index.json')
        .then(function (response) {
            $scope.type1 = response.data.types[0].type;
            $scope.type2 = response.data.types[1].type;
            $scope.type3 = response.data.types[2].type;
            $scope.type4 = response.data.types[3].type;
            $scope.type5 = response.data.types[4].type;
            $scope.type6 = response.data.types[5].type;
        });
    $scope.name = "John Doe";
})
