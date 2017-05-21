app.controller("quilt1Ctrl", function ($scope,$http) {
    // $('.owl-carousel-brand').owlCarousel({
    //     loop: true,
    //     margin: 5,
    //     dots: false,
    //     lazyLoad: true,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    //     smartSpeed: 1000,
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // })
    $http.get("json/home.json").then(function(response){
        $scope.quilt1 = response.data.quilt[0];
        console.log($scope.quilt1);
        $scope.dimgs = $scope.quilt1.dimg;
        console.log($scope.dimgs)
    })
})
