app.controller('recommendCtrl',function($scope,$http){
    console.log("132")
    $http.get('json/recommend.json').then(
        function(response){
            $scope.recs = response.data.recoms;
            console.log($scope.recs)
        }
    )
})